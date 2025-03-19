"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const Profile = () => {
    const { user, isLoaded } = useUser();

    if (!isLoaded) return <p>Loading profile...</p>;

    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
            <div className="mt-4 flex flex-col items-center gap-3 bg-gray-100 p-5 rounded-lg shadow-md">
                {user?.imageUrl && (
                    <img
                        src={user.imageUrl}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border"
                    />
                )}
                <p className="text-lg font-medium text-gray-700">{user?.fullName}</p>
                <p className="text-sm text-gray-500">{user?.emailAddresses[0]?.emailAddress}</p>
            </div>
        </div>
    );
};

export default Profile;
