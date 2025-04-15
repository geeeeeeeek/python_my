'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
                    <div className="w-24 h-1 bg-mainColorNormal mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* 左侧图片 */}
                    <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1534119428213-bd2626145164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=80"
                            alt="Our company"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    
                    {/* 右侧内容 */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Products for Your Lifestyle</h3>
                        <p className="text-gray-600 mb-6">
                            We are a premium retailer dedicated to providing high-quality products that enhance your everyday life. Since our founding in 2010, we've been passionate about curating collections that combine style, functionality, and durability.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our mission is to offer exceptional products that stand the test of time. We believe in sustainable practices, ethical sourcing, and creating long-lasting relationships with our customers.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center">
                                <div className="rounded-full bg-mainColorLight p-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mainColorNormal" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Premium Quality</span>
                            </div>
                            <div className="flex items-center">
                                <div className="rounded-full bg-mainColorLight p-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mainColorNormal" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Fast Shipping</span>
                            </div>
                            <div className="flex items-center">
                                <div className="rounded-full bg-mainColorLight p-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mainColorNormal" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">24/7 Support</span>
                            </div>
                            <div className="flex items-center">
                                <div className="rounded-full bg-mainColorLight p-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mainColorNormal" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">100% Satisfaction</span>
                            </div>
                        </div>
                        
                        <Link href="/about" className="inline-block px-6 py-3 bg-mainColorNormal text-white font-medium rounded-md hover:bg-mainColorDeep transition-colors duration-300 self-start">
                            View More
                        </Link>
                    </div>
                </div>
                
                {/* 统计数据 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
                    <div className="p-6 bg-mainColorLight rounded-md">
                        <div className="text-4xl font-bold text-mainColorNormal mb-2">12+</div>
                        <div className="text-gray-700">Years of Experience</div>
                    </div>
                    <div className="p-6 bg-mainColorLight rounded-md">
                        <div className="text-4xl font-bold text-mainColorNormal mb-2">1500+</div>
                        <div className="text-gray-700">Products</div>
                    </div>
                    <div className="p-6 bg-mainColorLight rounded-md">
                        <div className="text-4xl font-bold text-mainColorNormal mb-2">25k+</div>
                        <div className="text-gray-700">Happy Customers</div>
                    </div>
                    <div className="p-6 bg-mainColorLight rounded-md">
                        <div className="text-4xl font-bold text-mainColorNormal mb-2">15+</div>
                        <div className="text-gray-700">Awards Won</div>
                    </div>
                </div>
            </div>
        </div>
    )
}