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
        <div className="container mt-5">
            {profile ? (
                <div className="card mx-auto shadow" style={{ maxWidth: '700px' }}>
                    {/* Banner Section */}
                    <div className="bg-dark position-relative" style={{ height: '160px' }}>
                        {/* Profile Picture */}
                        <div className="position-absolute top-100 start-50 translate-middle" style={{ width: '120px' }}>
                            <Image
                                src="/assets/images/profile.png"
                                alt="Profile"
                                width={120}
                                height={120}
                                className="rounded-circle border border-3 border-white"
                            />
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="card-body mt-5 text-center">
                        <h4 className="fw-bold text-black">{profile.first_name} {profile.last_name}</h4>
                        <p className="text-muted mb-1">@{profile.user_name}</p>
                        <p className="mb-3">{profile.email}</p>
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline-danger btn-sm mb-4"
                        >
                            Logout
                        </button>

                        {/* Uploads */}
                        <div className="text-start mt-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="fw-bold">Uploads</span>
                                <button className="btn btn-sm btn-outline-secondary">⋮</button>
                            </div>
                            <div className="bg-light rounded p-4 text-muted" style={{ height: '160px' }}>
                                No uploads yet
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading user data...</p>
                </div>
            )}
        </div>
    );

}