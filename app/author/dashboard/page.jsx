"use client";
import NavBar from '@/app/_components/NavBar'
import TeamAllNews from '@/app/_components/TeamAllNews'
import TeamDashboardNavigation from '@/app/_components/TeamDashboardNavigation'
import React from 'react';
import {} from '@clerk/clerk-js';
// import { clerkClient } from "@clerk/nextjs";
import { useUser,  } from '@clerk/clerk-react';

// import { useClerk } from "@clerk/nextjs"


const page = () => {
    const user = useUser();


    // console.log(Clerk);

    // Get the user's information
    // const user = Clerk.user;
    // // Check if the user is logged in
    // const isLoggedIn = Clerk.isLoggedIn();

    console.log("user", user);

    return (
        <>
            <NavBar />
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ flex: 1 }}>
                    <TeamDashboardNavigation />
                </div>
                <div style={{ flex: 4, display: "flex", flexDirection: "column", }}>
                    <div>
                        <a
                            className="inline-block rounded m-2 border border-indigo-600 bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            href="#"
                        >
                            Create News +
                        </a>
                    </div>
                    <TeamAllNews />
                </div>
            </div>
        </>
    )
}

export default page