import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className="w-full bg-white flex items-center justify-between px-10 py-4 shadow-md">
            <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-black">Na<span className='text-[#807EFF]'>Q</span>di</span>
            </div>
            <div className="flex items-center space-x-4">
                <Link href={"/api/auth/logout"}
                    className="bg-red-700 text-white px-4 py-2 rounded-full">
                    Logout
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
