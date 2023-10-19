
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer bg-indigo-300">
                <div className="container mx-auto">
                    <div className="md:flex text-center md:text-left gap-10 justify-between pt-16 pb-8 ">
                        <div className="logo">
                        <Link className='flex items-center justify-center md:justify-normal gap-3' href={'/'} >
                            <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/391662872_311519831633258_365017500339988027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xfGf22GL6lAAX_td7VQ&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCzoKHTR-madZqISeuzblcxPzdkC2oGX9l7avHlcDmhPw&oe=6536AC6B" alt="" width='40px' />
                            <p className='text-3xl font-bold uppercase'>HSC Topper's</p>
                        </Link>
                        </div>
                        <div className="company_about">
                            <ul>
                                <li className='text-2xl font-bold mb-4'>Help</li>
                                <li className='mb-2'>About Us</li>
                                <li className='mb-2'>Privacy Policy</li>
                                <li className='mb-2'>Terms & Condtions</li>
                            </ul>
                        </div>
                        <div className="more">
                            <ul>
                                <li className='text-2xl font-bold mb-4'>Explore</li>
                                <li className='mb-2'>Programs</li>
                                <li className='mb-2'>Teacher Registration</li>
                            </ul>
                        </div>
                        <div className="address">
                            <ul>
                                <li className='text-2xl font-bold mb-4'>Get In Touch</li>
                                <li className='mb-2'>Address: Ghospara More, David Math(3rd Floor), <br/> Boalia, Rajshahi</li>
                                <li className='mb-2'>Helpline: 01722-694850</li>
                            </ul>
                            <div className='icon flex justify-center gap-4 text-4xl text-white'>
                                <FaFacebook/>
                                <FaYoutube/>
                                <FaTwitter/>
                                <FaInstagram/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <hr />
                        <p className="p-4">Copyright © HSC_Topper's Academic & Admission Care. All rights reserved.2023</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;