'use client'
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/index/sections/pagination';
import SearchBar from "@/components/index/sections/searchBar";
import SearchResultBar from "@/components/index/sections/SearchResultBar";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

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

// 更新分类数据，添加子分类
const categories = [
    { 
        name: 'Accessories', 
        count: 7, 
        id: 1,
    },
    { 
        name: 'Men', 
        count: 14, 
        id: 2,
        subCategories: [
            { name: 'Shirts', count: 5, id: 21 },
            { name: 'Jeans', count: 4, id: 22 },
            { name: 'Jackets', count: 3, id: 23 },
            { name: 'Shoes', count: 2, id: 24 }
        ]
    },
    { 
        name: 'Women', 
        count: 17, 
        id: 3,
        subCategories: [
            { name: 'Dresses', count: 6, id: 31 },
            { name: 'Tops', count: 5, id: 32 },
            { name: 'Skirts', count: 3, id: 33 },
            { name: 'Shoes', count: 3, id: 34 }
        ]
    }
];

// 分类组件
function CategoryItem({ category, currentCategoryId }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubCategories = category.subCategories && category.subCategories.length > 0;
    const isActive = currentCategoryId === category.id;
    
    return (
        <div className="mb-2">
            <div className="flex justify-between items-center py-2">
                <Link 
                    href={`/product/category/${category.id}`} 
                    className={`${isActive ? 'text-mainColorNormal font-semibold' : 'text-gray-600'} hover:text-mainColorNormal flex-grow`}
                >
                    {category.name}
                </Link>
                {hasSubCategories && (
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-1 text-gray-500 hover:text-mainColorNormal focus:outline-none"
                    >
                        <ChevronDownIcon 
                            className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                        />
                    </button>
                )}
            </div>
            
            {/* 子分类 */}
            {hasSubCategories && isOpen && (
                <ul className="pl-6 mt-1 border-t border-gray-100">
                    {category.subCategories.map((subCategory) => (
                        <li key={subCategory.id} className="flex items-center py-2">
                            <span className="text-xl text-gray-500 mr-2">•</span>
                            <Link 
                                href={`/product/category/${subCategory.id}`}
                                className={`${currentCategoryId === subCategory.id ? 'text-mainColorNormal font-semibold' : 'text-gray-600'} hover:text-mainColorNormal`}
                            >
                                {subCategory.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function ProductList({ categoryId, pageNumber, total, searchQuery }) {

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

                        {/* 分类 - 使用折叠面板 */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <div className="divide-y divide-gray-100">
                                {categories.map((category) => (
                                    <CategoryItem 
                                        key={category.id} 
                                        category={category} 
                                        currentCategoryId={Number(categoryId)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* 热门产品 - 在md尺寸以下隐藏 */}
                        <div className="hidden md:block">
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