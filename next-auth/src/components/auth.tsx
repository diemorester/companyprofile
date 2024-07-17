"use client"

import supabase from "@/supabase"
import { useEffect, useState } from "react"

interface IUser {
    email?: string
    user_metadata?: {
        avatar_url: string
    }
}

export const AuthPage = () => {
    const [user, setUser] = useState<any>()
    const getData = () => {
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            setUser(session?.user)
        })
    }

    const signinWithGoogle = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent'
                }
            }
        })

        if (error) {
            console.log("Error during Google sign-in:", error.message);

        }
        console.log(data);
    }

    const handleLogOut = () => {
        supabase.auth.signOut()
        setUser(null)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {user && (
                <div>
                    <div>
                        {user.email}
                    </div>
                    <img
                        src={user.user_metadata.avatar_url}
                        className="rounded-full"
                    />
                </div>
            )}
            {
                user ?
                    <button onClick={handleLogOut} className="relative overflow-hidden  border-2 font-medium border-stone-50 bg-transparent py-2 px-5 text-stone-50 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#ED1C24] before:transition-transform before:duration-300 before:content-[''] hover:text-stone-50 before:hover:scale-x-100">
                        Sign Out
                    </button>
                    :
                    <button onClick={signinWithGoogle} className="relative overflow-hidden  border-2 font-medium border-stone-50 bg-transparent py-2 px-5 text-stone-50 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#ED1C24] before:transition-transform before:duration-300 before:content-[''] hover:text-stone-50 before:hover:scale-x-100">
                        Sign in with Google
                    </button>
            }
        </div>
    )
}