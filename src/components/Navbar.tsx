import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
     <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

                {/* Logo */}
                <Link href='/' className='flex items-center'>
                    <Image src='/images/logo7.svg' alt='I Care Logo' width={120} height={40} />
                </Link>

                {/* Navigation Link */}
                <div className='hidden md:flex items-center space-x-8'>
                    <Link href="/find-internship" className="text-gray-600 hover:text-blue-600">
                        ค้นหาเพื่อนทำธุระ
                    </Link>
                    {/* <Link href="/articles" className="text-gray-600 hover:text-blue-600">
                        บทความ
                    </Link> */}
                    <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                        ติดต่อเรา
                    </Link>
                </div>

                {/* Auth Login/Register Button */}
                <div className='flex items-center space-x-4'>
                    <Link href="/login" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        เข้าสู่ระบบ
                    </Link>
                    <Link href="/register" 
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        ลงทะเบียน
                    </Link>
                </div>

            </div>
        </div>
    </nav>
  )
}
