"use client";
import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Update with your server URL

const page = () => {

    const [isSharing, setIsSharing] = useState(false);
    const peerConnectionRef = useRef();

    useEffect(() => {
        socket.on('offer', async (offer) => {
            // Receive offer from student and create peer connection
            peerConnectionRef.current = new RTCPeerConnection();
            await peerConnectionRef.current.setRemoteDescription(offer);

            // Create answer
            const answer = await peerConnectionRef.current.createAnswer();
            await peerConnectionRef.current.setLocalDescription(answer);

            // Send answer to student
            socket.emit('answer', answer);
        });

        socket.on('candidate', async (candidate) => {
            // Receive ICE candidate and add it to peer connection
            await peerConnectionRef.current.addIceCandidate(candidate);
        });

        return () => {
            socket.off('offer');
            socket.off('candidate');
        };
    }, []);

    const startSharingScreen = async () => {
        console.log("kkk");
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });

            // Share screen with students
            setIsSharing(true);
            console.log("localdesc teacher", peerConnectionRef.current.localDescription);
            socket.emit('offer', peerConnectionRef.current.localDescription);

            // Add stream tracks to peer connection
            stream.getTracks().forEach(track => {
                peerConnectionRef.current.addTrack(track, stream);
            });
        } catch (error) {
            console.error('Error sharing screen:', error);
        }
    };


    return (
        <div>
            <h1>Teacher's Dashboard</h1>
            {isSharing ? (
                <p>Currently sharing screen...</p>
            ) : (
                <button onClick={startSharingScreen}>Start Sharing</button>
            )}
        </div>
    )
}

export default page