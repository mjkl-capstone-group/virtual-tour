"use client";

import { useEffect, useState } from 'react'
import supabase from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Profile() {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const getUserData = async () => {
            const { data: sessionData } = await supabase.auth.getSession()

            if (!sessionData?.session) {
                router.push('/signin')
                return
            }

            const currentUser = sessionData.session.user
            setUser(currentUser)

            const { data: profileData, error } = await supabase
                .from('visitors')
                .select('first_name, last_name, user_name, email')
                .eq('visitor_id', currentUser.id)
                .single()

            if (error) {
                console.error('Error fetching profile:', error)
            } else {
                setProfile(profileData)
            }
        }

        getUserData()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <div className="container py-5">
            {profile ? (
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow rounded-4 p-4">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-4 text-center">
                                    <Image
                                        src="/assets/images/profile.png"
                                        alt="Profile Image"
                                        width={150}
                                        height={150}
                                        className="rounded-circle border"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="fw-bold text-black">{profile.first_name} {profile.last_name}</h3>
                                    <p className="text-muted mb-1">@{profile.user_name}</p>
                                    <p className="mb-3">{profile.email}</p>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline-danger btn-sm"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading user data...</p>
                </div>
            )}
        </div>
    )
}
