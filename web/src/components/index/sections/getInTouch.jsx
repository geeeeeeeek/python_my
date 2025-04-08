'use client'
import { useState } from 'react';

export default function GetInTouch() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // 这里可以添加发送表单数据的逻辑
    };

    return (
        <div className="bg-gray-50 py-10 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
                    {/* 左侧联系表单 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mainColor3 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mainColor3 focus:border-transparent"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mainColor3 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mainColor3 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="bg-mainColor3 hover:bg-mainColor3/80 text-white font-medium py-2 px-5 rounded-md uppercase tracking-wide transition-colors duration-200 text-sm"
                            >
                                Send Now
                            </button>
                        </form>
                    </div>
                    
                    {/* 右侧联系信息 */}
                    <div className="flex flex-col justify-center pl-0 lg:pl-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Talk To Us</h2>
                        
                        <div className="space-y-6">
                            {/* 邮箱 */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-mainColor3/10 flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-mainColor3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase">EMAIL</p>
                                    <p className="text-mainColor3 font-medium text-sm">something@tyler.com</p>
                                </div>
                            </div>
                            
                            {/* 电话 */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-mainColor3/10 flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-mainColor3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase">PHONE NUMBER</p>
                                    <p className="text-mainColor3 font-medium text-sm">202-555-0188</p>
                                </div>
                            </div>
                            
                            {/* 地址 */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-mainColor3/10 flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-mainColor3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase">ADDRESS</p>
                                    <p className="text-mainColor3 font-medium text-sm">2727 Ocean Road,</p>
                                    <p className="text-mainColor3 font-medium text-sm">Malibu, CA, 90264</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* 社交媒体 */}
                        <div className="mt-8">
                            <p className="text-gray-800 font-medium mb-3 text-sm">Follow Us:</p>
                            <div className="flex space-x-2">
                                {/* Facebook */}
                                <a href="#" className="w-8 h-8 rounded-full bg-mainColor3/10 flex items-center justify-center text-mainColor3 hover:bg-mainColor3 hover:text-white transition-colors duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                                
                                {/* Twitter */}
                                <a href="#" className="w-8 h-8 rounded-full bg-mainColor3/10 flex items-center justify-center text-mainColor3 hover:bg-mainColor3 hover:text-white transition-colors duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                
                                {/* LinkedIn */}
                                <a href="#" className="w-8 h-8 rounded-full bg-mainColor3/10 flex items-center justify-center text-mainColor3 hover:bg-mainColor3 hover:text-white transition-colors duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                                    </svg>
                                </a>
                                
                                {/* YouTube */}
                                <a href="#" className="w-8 h-8 rounded-full bg-mainColor3/10 flex items-center justify-center text-mainColor3 hover:bg-mainColor3 hover:text-white transition-colors duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}