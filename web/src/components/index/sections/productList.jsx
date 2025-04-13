
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/index/sections/pagination';
import SearchBar from "@/components/index/sections/searchBar";
import SearchResultBar from "@/components/index/sections/SearchResultBar";

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
    { name: 'Accessories', count: 7, id:1 },
    { name: 'Men', count: 14 , id:2},
    { name: 'Women', count: 17, id:3 }
];

export default function ProductList({ categoryId, pageNumber,total, searchQuery }) {

    // 构建基础链接前缀，不包含页码部分
    let linkPrefix = '/product';

    // 添加分类部分，如果存在
    if (categoryId) {
        linkPrefix += `/category/${categoryId}`;
    }

    // 添加页码路径前缀
    linkPrefix += '/page';

    // 如果有搜索查询，我们需要在每个分页链接中保持它
    const searchSuffix = searchQuery ? `?s=${encodeURIComponent(searchQuery)}` : '';


    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-x-16">
                    {/* 左侧边栏 */}
                    <div className="md:w-1/4">

                        {/* 搜索框 */}
                        <SearchBar />

                        {/* 分类 */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.name} className="flex justify-between items-center py-2">
                                        <Link href={"/product/category/"+category.id} className="text-gray-600 hover:text-blue-600">
                                            {category.name}
                                        </Link>
                                        <span className="text-gray-500">({category.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 分割线 */}
                        {/*<div className="border-b border-gray-200 mb-8"></div>*/}

                        {/* 热门产品 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Best Sellers</h3>
                            <ul>
                                {bestSellers.map((product) => (
                                    <li key={product.id} className="mb-4 pb-4 border-b border-gray-100">
                                        <Link href={`/product/${product.id}`} className="flex items-center">
                                            <div className="w-16 h-16 flex-shrink-0 mr-4 bg-gray-100 relative">
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
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 右侧产品列表 */}
                    <div className="md:w-3/4 bg-white p-0">

                        {/* 搜索结果提示 */}
                        <SearchResultBar />

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
                            <Pagination
                                        currentPage={pageNumber}
                                        linkPrefix={linkPrefix}
                                        total={total}
                                        searchSuffix={searchSuffix} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}