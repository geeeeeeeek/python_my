export default function CustomersSay(){
    // 客户评价数据
    const testimonials = [
        {
            id: 1,
            content: "Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.",
            name: "JENNIFER LEWIS",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
        },
        {
            id: 2,
            content: "Great user experience on your website. Great user experience on your website.I found exactly what I was looking for at a great price. I will definitely be telling my friends.",
            name: "ALICIA HEART",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
        },
        {
            id: 3,
            content: "Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.",
            name: "JUAN CARLOS",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
        }
    ];

    return(
        <div className="w-full border-t-[1px] border-gray-200">
            <div className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-left mb-16">
                    WHAT OUR CUSTOMERS SAY
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex flex-col">
                            {/* 引号  */}
                            <div className="text-2xl text-mainColorNormal mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"/></svg>
                            </div>

                            {/* 评价内容 */}
                            <p className="text-gray-700 mb-8 flex-0">
                                {testimonial.content}
                            </p>

                            {/* 客户信息 */}
                            <div className="flex items-center mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-sm">
                                    {testimonial.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}