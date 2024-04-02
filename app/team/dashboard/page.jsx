import NavBar from '@/app/_components/NavBar'
import TeamAllNews from '@/app/_components/TeamAllNews'
import TeamDashboardNavigation from '@/app/_components/TeamDashboardNavigation'
import React from 'react'

const page = () => {
  return (
    <>
    <NavBar />

    <div style={{display: "flex", justifyContent: "flex-start" }}>
      <div style={{flex: 1 }}>

      <TeamDashboardNavigation />
       </div>
      <div style={{ flex: 4 }}>

        <TeamAllNews />

       </div>
    </div>



    </>
  )
}

export default page