"use client"
// pages/student.js
import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Update with your server URL

const StudentPage = () => {
  const peerConnectionRef = useRef();

  useEffect(() => {
    socket.on('answer', async (answer) => {
      // Receive answer from teacher and set it as remote description
      await peerConnectionRef.current.setRemoteDescription(answer);
    });

    socket.on('candidate', async (candidate) => {
      // Receive ICE candidate and add it to peer connection
      await peerConnectionRef.current.addIceCandidate(candidate);
    });

    // Create peer connection
    peerConnectionRef.current = new RTCPeerConnection();

    // Send ICE candidates to teacher
    peerConnectionRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('candidate', event.candidate);
      }
    };

    // Receive video stream from teacher
    peerConnectionRef.current.ontrack = (event) => {
      // Display teacher's screen sharing video
      const remoteVideo = document.getElementById('remoteVideo');
      if (remoteVideo) {
        remoteVideo.srcObject = event.streams[0];
      }
    };

    return () => {
      socket.off('answer');
      socket.off('candidate');
    };
  }, []);

  return (
    <div>
      <h1>Student's View</h1>
      <video id="remoteVideo" autoPlay playsInline></video>
    </div>
  );
};

export default StudentPage;
