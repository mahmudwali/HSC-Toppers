import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <>
        <div className='p-4 bg-gray-200'>
            <div className="container flex justify-between items-center mx-auto">
                <div className="logo_area">
                    <div className="logo">
                    <Link className='flex items-center  gap-3' href={'/'} >
                    <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/391662872_311519831633258_365017500339988027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xfGf22GL6lAAX_td7VQ&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCzoKHTR-madZqISeuzblcxPzdkC2oGX9l7avHlcDmhPw&oe=6536AC6B" alt="" width='40px' />
                    <p className='text-3xl font-bold uppercase'>HSC Topper's</p>
                    </Link>
                    </div>
                </div>
                <div className="menu_area hidden md:flex">
                    <ul className='flex gap-6 text-xl font-bold'>
                        <li><Link href={'/'}>প্রোগ্রামসমূহ</Link></li>
                        <li><Link href={'/'}>অনুসন্ধান</Link></li>
                    </ul>
                </div>
                <div className="login_area">
                    <button className='bg-indigo-500 p-2 md:p-3 rounded-lg text-white font-bold'>Join Now</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;