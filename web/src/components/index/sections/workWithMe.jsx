export default function WorkWithMe() {
    return (
        <div className="relative h-[300px] md:h-[600px] w-full">
            {/* 背景图片 */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Mountain Lake"
                    className="w-full h-full object-cover"
                />
                {/* 深色遮罩 */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* 内容区域 */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Work with me</h2>
                <p className="text-lg md:text-xl mb-4 max-w-2xl">
                    Send me a message to discuss your needs.
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                    I always reply within 24 hours.
                </p>
                <a
                    href="/contact"
                    className="inline-block border-2 border-white hover:border-mainColorNormal text-white hover:bg-mainColorNormal px-8 py-3 transition-colors duration-300 text-lg"
                >
                    Get A Quote
                </a>
            </div>
        </div>
    );
}