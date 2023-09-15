import React from 'react';
import Link from 'next/link';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/components/firebase';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import { ref, push, set, onValue, update } from 'firebase/database';
import Modal from 'react-modal';


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useAuthState(auth);



    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
        const results = await signInWithPopup(auth, googleAuth);
        const { user } = results;
        const userInfo = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL
        };
        // Do something with userInfo, if needed
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="bg-gray-100 min-h-screen mt-20">
            <Navbar />


            <div className="container mx-auto py-8">
                <div className="bg-white p-8 rounded shadow-md w-96 mx-auto">
                    <h1 className="text-2xl font-semibold mb-4">Welcome to Smart Parking!</h1>
                    <p className="text-gray-600">
                        Find and reserve parking spots with ease. Whether you're a parking spot owner or a user looking for a spot, we've got you covered.
                    </p>
                    <div className="mt-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
