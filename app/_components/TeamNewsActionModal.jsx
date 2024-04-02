import React from 'react'

const TeamNewsActionModal = ({ handleCloseModal }) => {
  return (
    <>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 10, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          height: 250,
          width: 550,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>

          <div style={{display: "flex", justifyContent: "space-between", }}>
            <h1>Are you sure you want to approve this news?</h1>

            <button onClick={handleCloseModal}> Close</button>
          </div>

          <div>
            <a
              onClick={handleCloseModal}
              href="#"
              className="inline-block rounded mx-4 bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
            >
              NO
            </a>

            <a
              href="#"
              className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
            >
              YES
            </a></div>


        </div>
      </div>


    </>
  )
}

export default TeamNewsActionModal