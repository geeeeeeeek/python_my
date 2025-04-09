export default function ServicePanel(){
    const services = [
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21.7C17.3 21.7 21.7 17.3 21.7 12C21.7 6.7 17.3 2.3 12 2.3C6.7 2.3 2.3 6.7 2.3 12C2.3 17.3 6.7 21.7 12 21.7Z" />
                    <path d="M15.8 8.2L8.2 15.8" />
                    <path d="M15.8 15.8L8.2 8.2" />
                    <path d="M7.7 14.5C7.7 14.5 9.7 16.5 12 16.5C14.3 16.5 16.3 14.5 16.3 14.5" />
                    <path d="M16.3 9.5C16.3 9.5 14.3 7.5 12 7.5C9.7 7.5 7.7 9.5 7.7 9.5" />
                </svg>
            ),
            title: "Worldwide Shipping",
            description: "Fast and reliable shipping to over 200 countries. Enjoy free shipping on orders over $50."
        },
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21.1L12 11.9" />
                    <path d="M12 11.9C13.7 11.9 15 10.6 15 8.9C15 7.2 13.7 5.9 12 5.9C10.3 5.9 9 7.2 9 8.9C9 10.6 10.3 11.9 12 11.9Z" />
                    <path d="M12 2.9C12 2.9 16 4.4 16 8.9L16 14.9C16 17.6 14.2 19.9 12 21.1C9.8 19.9 8 17.6 8 14.9L8 8.9C8 4.4 12 2.9 12 2.9Z" />
                </svg>
            ),
            title: "Best Quality",
            description: "Premium quality products with thorough quality control to ensure customer satisfaction."
        },
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11" />
                    <rect x="6" y="11" width="12" height="10" rx="2" />
                    <circle cx="12" cy="16" r="1" />
                </svg>
            ),
            title: "Secure Payments",
            description: "Multiple secure payment options with advanced encryption to protect your financial data."
        },
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6V12L16 14" />
                </svg>
            ),
            title: "24/7 Support",
            description: "Our customer service team is available around the clock to assist you with any inquiries."
        }
    ];

    return(
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题区域 */}
                <div className="text-center mb-16">
                    <div className="h-1 w-16 bg-mainColor3 mx-auto mb-6"></div>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Choose Us</h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        We provide exceptional service and premium products for our customers
                    </p>
                </div>
                
                {/* 服务特性展示 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="text-mainColor3 mb-6 transform transition-transform duration-300 group-hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                            <div className="h-1 w-10 bg-mainColor3 mb-4 transition-all duration-300 group-hover:w-16"></div>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}