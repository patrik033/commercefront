import Footer from "../ui/footer/footer";


import React from 'react';

export default function Layout({ children }) {

    return (
        <>

            <div className="flex-grow  md:overflow-y-auto   min-h-screen">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}