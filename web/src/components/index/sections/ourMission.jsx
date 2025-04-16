const stats = [
    { label: 'Global Customers', value: '10,000+' },
    { label: 'Countries Served', value: '80+' },
    { label: 'Years Experience', value: '18+' },
]

export default function OurMission() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6 lg:px-8">
                {/* 左侧：图片和统计数据 */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="relative h-80 lg:h-96 bg-gray-100 rounded-lg overflow-hidden mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Our Global Mission"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-mainColorLight p-6 rounded-lg">
                                <dd className="text-4xl font-semibold tracking-tight text-mainColorNormal mb-2">{stat.value}</dd>
                                <dt className="text-sm text-gray-600">{stat.label}</dt>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* 右侧：使命描述 */}
                <div className="flex flex-col w-full lg:w-1/2 p-0">
                    <div className="h-1 w-28 bg-gradient-to-r from-mainColorNormal to-mainColorNormal/50 mb-6"></div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-gray-700 mb-6">
                        Our mission is to be a leading global provider of high-quality chemical raw materials, 
                        creating sustainable value for our customers, partners, and communities worldwide.
                    </p>
                    <p className="text-gray-700 mb-6">
                        We are committed to delivering innovative solutions that meet the evolving needs of industries 
                        across diverse markets. Through our extensive expertise and global reach, we strive to facilitate 
                        seamless international trade while maintaining the highest standards of product quality, 
                        environmental responsibility, and customer service.
                    </p>
                    <p className="text-gray-700">
                        Our dedication to excellence, integrity, and sustainable practices drives everything we do. 
                        We continuously invest in developing our capabilities, expanding our network, and fostering 
                        meaningful relationships with stakeholders to achieve mutual growth and success in the global marketplace.
                    </p>
                </div>
            </div>
        </div>
    )
}