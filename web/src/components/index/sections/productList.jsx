import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/index/sections/pagination';

// 模拟产品数据
const products = [
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 1,
        name: 'Anchor Bracelet',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
];

// 模拟热门产品数据
const bestSellers = [
    {
        id: 7,
        name: 'Buddha Bracelet',
        price: 150.00,
        image: 'https://placehold.co/300x300?text=Buddha+Bracelet'
    },
    {
        id: 8,
        name: 'Blue Denim Jeans',
        price: 150.00,
        image: 'https://placehold.co/300x300?text=Blue+Jeans'
    },
    {
        id: 9,
        name: 'Boho Bangle Bracelet',
        price: 150.00,
        maxPrice: 170.00,
        image: 'https://placehold.co/300x300?text=Boho+Bracelet'
    },
    {
        id: 10,
        name: 'Black Hoodie',
        price: 150.00,
        image: 'https://placehold.co/300x300?text=Black+Hoodie'
    },
    {
        id: 11,
        name: 'Bright Red Bag',
        price: 100.00,
        maxPrice: 140.00,
        image: 'https://placehold.co/300x300?text=Red+Bag'
    }
];

// 模拟分类数据
const categories = [
    { name: 'Accessories', count: 7 },
    { name: 'Men', count: 14 },
    { name: 'Women', count: 17 }
];

export default async function ProductList() {
    return (
        <div className="bg-mainColorLight py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-x-16">
                    {/* 左侧边栏 */}
                    <div className="md:w-1/4">
                        {/* 搜索框 */}
                        <div className="mb-8">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
                                />
                                <button className="bg-mainColorNormal text-white px-4 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                        </div>


                        {/* 分类 */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.name} className="flex justify-between items-center py-2">
                                        <Link href="#" className="text-gray-600 hover:text-blue-600">
                                            {category.name}
                                        </Link>
                                        <span className="text-gray-500">({category.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 热门产品 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Best Sellers</h3>
                            <ul>
                                {bestSellers.map((product) => (
                                    <li key={product.id} className="flex items-center mb-4 pb-4 border-b border-gray-100">
                                        <div className="w-16 h-16 flex-shrink-0 mr-4 bg-gray-100 relative">
                                            <Link href={`/product/${product.id}`}>
                                                <div className="w-full h-full relative">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        unoptimized
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">{product.name}</h4>
                                            <div className="text-mainColorNormal font-medium">
                                                {product.maxPrice ? (
                                                    <span>${product.price.toFixed(2)} – ${product.maxPrice.toFixed(2)}</span>
                                                ) : (
                                                    <span>${product.price.toFixed(2)}</span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 右侧产品列表 */}
                    <div className="md:w-3/4 bg-white p-12">

                        {/* 产品网格 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <div key={product.id} className="group bg-white  ">
                                    <div className="relative mb-6 overflow-hidden">
                                        <Link href={`/product/${product.id}`}>
                                            <div className="relative w-full pt-[100%]">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    unoptimized
                                                />
                                            </div>
                                        </Link>
                                    </div>

                                    <div>
                                        <h3 className="text-gray-800 font-semibold text-lg mb-2">{product.name}</h3>

                                        <div className="text-mainColorNormal font-medium">
                                            {product.isOnSale ? (
                                                <div className="flex items-center">
                                                    <span className="text-gray-400 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
                                                    <span className="font-bold">${product.price.toFixed(2)}</span>
                                                </div>
                                            ) : product.maxPrice ? (
                                                <span>${product.price.toFixed(2)} – ${product.maxPrice.toFixed(2)}</span>
                                            ) : (
                                                <span>${product.price.toFixed(2)}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 分页 */}
                        <div className="mt-10 flex justify-center">
                            <Pagination totalPages={2} currentPage={1} linkPrefix="/product" total={17} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}