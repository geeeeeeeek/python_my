'use client'
import {useState} from 'react';

export default function GetInTouch() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
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
        <div className="bg-mainColorLight py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="h-1 w-16 bg-mainColorNormal mx-auto mb-6"></div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-4 px-4">
                        We're here to help and answer any question you might have
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white overflow-hidden shadow-xl rounded-sm">
                        {/* 左侧联系表单 */}
                        <div className="p-8 lg:p-12">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                <svg className="w-5 h-5 text-mainColorNormal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                </svg>
                                Send Us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mainColorNormal focus:border-transparent transition-colors duration-200 rounded-sm"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mainColorNormal focus:border-transparent transition-colors duration-200 rounded-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mainColorNormal focus:border-transparent transition-colors duration-200 rounded-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mainColorNormal focus:border-transparent transition-colors duration-200 rounded-sm"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="bg-mainColorNormal hover:bg-mainColorDeep text-white font-medium py-3 px-10 uppercase tracking-wide transition-colors duration-200 text-sm inline-flex items-center rounded-sm"
                                    >
                                        Send Message
                                        <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* 右侧联系信息 */}
                        <div className="bg-gray-50 p-8 lg:p-12 relative">

                            {/* 装饰背景元素 - 设置最低的z-index */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-mainColorNormal/5 rounded-bl-full z-0"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-mainColorNormal/5 rounded-tr-full z-0"></div>

                            <div className="h-full flex flex-col relative z-10">
                                <h3 className="text-xl font-semibold text-gray-900 mb-8 flex items-center">
                                    <svg className="w-5 h-5 text-mainColorNormal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Contact Information
                                </h3>

                                <div className="space-y-8 mb-auto relative z-10">
                                    {/* 邮箱 */}
                                    <div className="flex">
                                        <div className="w-12 h-12 rounded-full bg-mainColorNormal/10 flex items-center justify-center mr-4 shrink-0">
                                            <svg className="w-6 h-6 text-mainColorNormal" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm font-medium uppercase mb-1">EMAIL</p>
                                            <a href="mailto:something@tyler.com" className="text-gray-900 hover:text-mainColorNormal font-medium text-lg transition-colors">something@tyler.com</a>
                                        </div>
                                    </div>

                                    {/* 电话 */}
                                    <div className="flex">
                                        <div className="w-12 h-12 rounded-full bg-mainColorNormal/10 flex items-center justify-center mr-4 shrink-0">
                                            <svg className="w-6 h-6 text-mainColorNormal" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm font-medium uppercase mb-1">PHONE NUMBER</p>
                                            <a href="tel:202-555-0188" className="text-gray-900 hover:text-mainColorNormal font-medium text-lg transition-colors">202-555-0188</a>
                                        </div>
                                    </div>

                                    {/* 地址 */}
                                    <div className="flex">
                                        <div className="w-12 h-12 rounded-full bg-mainColorNormal/10 flex items-center justify-center mr-4 shrink-0">
                                            <svg className="w-6 h-6 text-mainColorNormal" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm font-medium uppercase mb-1">ADDRESS</p>
                                            <p className="text-gray-900 font-medium">2727 Ocean Road, Malibu, CA, 90264</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 社交媒体 - 确保最高的z-index */}
                                <div className="mt-10 pt-8 border-t border-gray-200 relative z-20">
                                    <p className="text-gray-700 font-semibold mb-4">Follow Us:</p>
                                    <div className="flex space-x-4">
                                        {/* Facebook */}
                                        <a href="#"
                                        className="w-10 h-10 rounded-full bg-mainColorNormal text-white flex items-center justify-center hover:bg-mainColorNormal/80 transition-colors duration-300 relative z-20">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                            </svg>
                                        </a>

                                        {/* Twitter */}
                                        <a href="#"
                                        className="w-10 h-10 rounded-full bg-mainColorNormal text-white flex items-center justify-center hover:bg-mainColorNormal/80 transition-colors duration-300 relative z-20">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                            </svg>
                                        </a>

                                        {/* LinkedIn */}
                                        <a href="#"
                                        className="w-10 h-10 rounded-full bg-mainColorNormal text-white flex items-center justify-center hover:bg-mainColorNormal/80 transition-colors duration-300 relative z-20">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                                            </svg>
                                        </a>

                                        {/* YouTube */}
                                        <a href="#"
                                        className="w-10 h-10 rounded-full bg-mainColorNormal text-white flex items-center justify-center hover:bg-mainColorNormal/80 transition-colors duration-300 relative z-20">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}