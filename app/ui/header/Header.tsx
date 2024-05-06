"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import configuredAuth from "../../config/firebaseConfig"
import Logout from '@/app/logout/page';

const isLoggedIn = false;

const Header = () => {


    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const auth = getAuth(configuredAuth);

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                console.log('User is signed in');
            } else {
                setIsLoggedIn(false);
                console.log('No user is signed in');
            }
        });
    }, [auth]);

    return (
        <header className="bg-gray-800 text-white py-4 px-2">
            <div className="container mx-auto flex justify-between items-center">
                <Breadcrumb
                    homeElement={"Home"}
                    separator={<span>| </span>}
                    activeClasses='text-blue-200'
                    containerClasses='flex'
                    listClasses='hover:underline mx-2 font-bold'
                    capitalizeLinks
                />
                <nav>
                    <ul className="flex space-x-4">
                        {!isLoggedIn ? (
                            <>
                                <li>
                                    <Link href="/login">
                                        <h1 className="hover:text-gray-300">Login</h1>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register">
                                        <h1 className="hover:text-gray-300">Register</h1>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button className="hover:text-gray-300">
                                    Logout
                                </button>
                                <Link href="/logout">
                                    <Logout />
                                </Link>
                            </li>
                        )}
                    </ul>

                </nav>
            </div>
        </header>
    );
};

export default Header;