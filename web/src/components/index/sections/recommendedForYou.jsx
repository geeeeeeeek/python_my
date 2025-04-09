const products = [
    {
        id: 1,
        name: 'Fusion Basic',
        category: 'UI Kit',
        href: '#',
        price: '$49',
        imageSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt: 'Fusion Basic UI Kit with essential components for web design projects.',
    },
    {
        id: 2,
        name: 'Fusion Pro',
        category: 'UI Kit',
        href: '#',
        price: '$79',
        imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt: 'Professional UI Kit with advanced components and design elements.',
    },
    {
        id: 3,
        name: 'Fusion Enterprise',
        category: 'UI Kit',
        href: '#',
        price: '$129',
        imageSrc: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt: 'Enterprise-grade UI Kit with comprehensive component library.',
    },
    {
        id: 4,
        name: 'Fusion Ultimate',
        category: 'UI Kit',
        href: '#',
        price: '$199',
        imageSrc: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt: 'Complete UI Kit solution with premium components and priority support.',
    },
    // More products...
]

// 星级评分组件
function StarRating({ rating }) {
    return (
        <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((star) => (
                <svg
                    key={star}
                    className={`h-4 w-4 ${
                        rating > star ? 'text-mainColor3' : 'text-gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
                    />
                </svg>
            ))}
        </div>
    )
}

export default function RecommendedForYou() {
    return (
        <div className="bg-gray-50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="h-1 w-16 bg-mainColor3 mx-auto mb-6"></div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">Recommended For You</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-4 px-4">
                        Discover our most popular products that match your style and needs
                    </p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="relative w-full h-72 rounded-lg overflow-hidden bg-white shadow-md">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="text-lg font-medium text-mainColor3">{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <a
                        href="/product"
                        className="bg-mainColor3 hover:bg-mainColor3/80 text-white font-medium py-3 px-12 rounded-sm uppercase tracking-wide transition-colors duration-200 text-sm inline-flex items-center"
                    >
                        View All Products
                        <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
