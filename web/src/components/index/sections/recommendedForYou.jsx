const products = [
    {
        id: 1,
        name: 'Fusion Enterprise',
        category: 'UI Kit',
        href: '#',
        price: '$129',
        imageSrc: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 2,
        name: 'Fusion Enterprise',
        category: 'UI Kit',
        href: '#',
        price: '$129',
        imageSrc: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 3,
        name: 'Fusion Ultimate',
        category: 'UI Kit',
        href: '#',
        price: '$199',
        imageSrc: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 4,
        name: 'Fusion Ultimate',
        category: 'UI Kit',
        href: '#',
        price: '$199',
        imageSrc: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    // More products...
]

export default function RecommendedForYou() {
    return (
        <div className="bg-mainColor0">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-medium text-gray-900">Recommended For You</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <div className="w-full rounded-md bg-white/75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                                        View Product
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p>{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <button
                        type="submit"
                        className="bg-mainColor3 hover:bg-mainColor3/80 text-white font-medium py-2 px-10 uppercase tracking-wide transition-colors duration-200 text-sm"
                    >
                        View All
                    </button>
                </div>
            </div>
        </div>
    )
}
