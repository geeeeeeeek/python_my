import React from 'react';
import Link from 'next/link';

import InquiryForm from "@/components/index/sections/inquiryForm";


// const sectionData = {
//     "siteLogo": "1743579693076.jpg",
//     "basicGlobal": {
//         "global_phone": "+86-1239998888",
//         "global_email": "hello2025@gmail.com",
//         "global_company_name": "sky ltd.group",
//         "global_address": "Beijing dongsan Road",
//         "global_wechat": "9878899",
//         "global_wechat_qrcode": "1742884043091.jpg",
//         "global_facebook": "http://www.facebook.com/hello",
//         "global_twitter": "https://twitter.com/hello",
//         "global_linkedin": "https://linkedin.com/in/java1001",
//         "global_whatsapp": "98888",
//         "global_youtube": "https://youtube.com/",
//         "global_instagram": "https://instagram.com/"
//     },
//     "navigationItems": [
//         {
//             "name": "Home",
//             "href": "/",
//             "type": "link"
//         },
//         {
//             "name": "Product",
//             "href": "/product"
//         },
//         {
//             "name": "About",
//             "href": "/about"
//         },
//         {
//             "name": "Contact",
//             "href": "/contact"
//         },
//         {
//             "name": "News",
//             "href": "/news"
//         },
//         {
//             "name": "Faq",
//             "href": "/faq"
//         }
//     ]
// }

const Footer = ({sectionData}) => {

    return (
        <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Quick Links */}
                    <div className="transform transition duration-300 hover:translate-y-[-5px]">
                        <h2 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Quick Links</h2>
                        <ul className="space-y-3">
                            {
                                sectionData.navigationItems.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href}
                                           className="hover:text-mainColorNormal transition flex items-center group">
                                        <span
                                            className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-gray-100 group-hover:bg-[#caf0f8] transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mainColorNormal"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 5l7 7-7 7"/>
                                            </svg>
                                        </span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="transform transition duration-300 hover:translate-y-[-5px]">
                        <h2 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Contact Us</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5 flex-shrink-0 mr-3 text-mainColorNormal" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                                <span>
                                    <strong className="text-gray-600">Email:</strong>{" "}
                                    <Link
                                        href={'mailto:' + sectionData.basicGlobal.global_email}
                                        className="hover:text-mainColorNormal transition"
                                    >
                                        {sectionData.basicGlobal.global_email}
                                    </Link>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5 flex-shrink-0 mr-3 text-[#00b4d8]" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                                <span>
                                    <strong className="text-gray-600">WeChat:</strong> {sectionData.basicGlobal.global_wechat}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5 flex-shrink-0 mr-3 text-[#00b4d8]" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <span>
                                    <strong className="text-gray-600">WhatsApp:</strong> {sectionData.basicGlobal.global_whatsapp}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5 flex-shrink-0 mr-3 text-mainColorNormal" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <span>
                                    <strong className="text-gray-600">Phone:</strong>  {sectionData.basicGlobal.global_phone}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5 flex-shrink-0 mr-3 text-[#ef476f]" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>
                                    <strong className="text-gray-600">Address:</strong> {sectionData.basicGlobal.global_address}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Inquiry Form */}
                    <InquiryForm />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mt-10 pt-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <div className="text-gray-500 text-sm">
                        <p>© 2025 { sectionData.basicGlobal.global_company_name }. All rights reserved.</p>
                        <p className="mt-1">Powered by <Link href="https://fktool.com"
                                                          target='_blank'
                                                          className="text-[#0077b6] hover:underline">FKtool</Link></p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-3 mt-4 md:mt-0">
                        <Link  href={sectionData['basicGlobal']['global_twitter']} target="_blank"
                            className="text-gray-500 hover:text-mainColorNormal transition-colors p-2 rounded-full hover:bg-gray-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </Link>
                        <Link   href={sectionData['basicGlobal']['global_instagram']} target="_blank"
                           className="text-gray-500 hover:text-mainColorNormal transition-colors p-2 rounded-full hover:bg-gray-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                        </Link>
                        <Link  href={sectionData['basicGlobal']['global_linkedin']} target="_blank"
                           className="text-gray-500 hover:text-mainColorNormal transition-colors p-2 rounded-full hover:bg-gray-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </Link>
                        {/* Facebook Icon */}
                        <Link  href={sectionData['basicGlobal']['global_facebook']} target="_blank"
                           className="text-gray-500 hover:text-mainColorNormal transition-colors p-2 rounded-full hover:bg-gray-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                            </svg>
                        </Link>
                        {/* YouTube Icon */}
                        <Link  href={sectionData['basicGlobal']['global_youtube']} target="_blank"
                           className="text-gray-500 hover:text-mainColorNormal transition-colors p-2 rounded-full hover:bg-gray-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;