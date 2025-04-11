

export default function TalkToUs() {
    return (
        <div className="relative bg-mainColorLight h-[300px] md:h-[600px]  ">
            {/*<img*/}
            {/*    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"*/}
            {/*    className="object-cover w-full h-full"*/}
            {/*/>*/}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">TALK TO US</h2>
                <p className="text-gray-700 mb-10 text-lg max-w-2xl mx-auto text-center">
                    Have any questions? We are always open to talk about your business, new projects, creative opportunities and how we can help you.                        </p>
                <a
                    href="/contact"
                    className="inline-block bg-mainColorNormal hover:bg-mainColorDeep shadow-md text-white font-medium py-3 px-8 transition-colors duration-300"
                >
                    GET IN TOUCH
                </a>
            </div>
        </div>
    )
}