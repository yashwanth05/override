import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import Modal from 'react-modal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useAuthState(auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <nav className="fixed top-0 left-0 w-full py-4 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="cursor-pointer font-bold ml-3 text-2xl">SmartPark</p>
          </Link>
        </div>

        <div className="hidden md:flex space-x-4 md:space-x-8 mt-24 md:mt-0">
          <Link href="/">
            <p className="cursor-pointer hover:text-white text-black font-se py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded">
              Home
            </p>
          </Link>



          {user ? (
            null
          ) : (
            <button
              className="cursor-pointer hover:text-white text-black py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
              onClick={login}
            >
              Sign in
            </button>
          )}

          {user && (
            <div className="flex items-center" onClick={() => setIsModalOpen(true)}>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 mr-5 rounded-full ml-4 cursor-pointer"
              />
            </div>

          )}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
              content: {
                width: '40%',
                height: '70%',
                margin: 'auto',
                overflow: 'auto',
              },
            }}
          >
            <div>
              <button
                className="cursor-pointer hover:text-white text-black py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
                onClick={() => {
                  auth.signOut();
                  setIsModalOpen(false);
                }}
              >
                Sign out
              </button>
            </div>
          </Modal>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
