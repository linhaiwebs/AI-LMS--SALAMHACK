"use client";
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import {db} from '../config/db'
import { USER_TABLE } from '@/config/schema';
import { eq } from 'drizzle-orm';

const Provider = ({children}) => {
    const {user} = useUser();

    useEffect(() => {
        user&&existUser();
    
    }, [user]);
    const existUser = async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return;
    
        try {
            console.log("Checking user existence in DB...");
    
            if (!db) {
                console.error("Database not initialized");
                return;
            }
    
            console.log("Database instance:", db);
     
            const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user.primaryEmailAddress.emailAddress));
    
            console.log("Query result:", result);
    
            if (result.length === 0) {
                console.log("User does not exist, inserting...");
     
    
                await db.insert(USER_TABLE).values({
                    name:user?.fullName,
                    email: user?.primaryEmailAddress.emailAddress
                });
    
                console.log("User inserted successfully.");
            } else {
                console.log("User already exists.");
            }
        } catch (error) {
            console.error("Error checking/inserting user:", error);
        }
    };
    

  return (
    <div> 
        {children}
    </div>
  )
}

export default Provider