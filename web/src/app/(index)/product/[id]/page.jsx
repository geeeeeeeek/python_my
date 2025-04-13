'use client'
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Carousel from "@/components/index/sections/carousel";

// 模拟产品数据获取函数
async function getProductById(id) {
    // 这里可以替换为实际的API调用
    const products = {
        '1': {
            id: 1,
            name: 'Basic Gray Jeans',
            category: 'Women',
            price: 150.00,
            images: [
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                'https://images.unsplash.com/photo-1608236415053-3691791bbffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            ],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            description: `Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.`,
            longDescription: `Since it's creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            relatedProducts: [1, 2, 3, 4]
        }
    };

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    return products[id] || null;
}

// 获取相关产品
async function getRelatedProducts(productIds) {
    if (!productIds || !productIds.length) return [];

    const allProducts = {
        '1': {
            id: 1,
            name: 'Gray Pattern Tshirt',
            category: 'Women',
            price: 30.00,
            maxPrice: 34.00,
            image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        },
        '2': {
            id: 2,
            name: 'Bright Gold Purse With Chain',
            category: 'Accessories',
            price: 150.00,
            image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
        },
        '3': {
            id: 3,
            name: 'Purple Tshirt',
            category: 'Women',
            price: 25.00,
            maxPrice: 27.00,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80'
        },
        '4': {
            id: 3,
            name: 'Purple Tshirt',
            category: 'Women',
            price: 25.00,
            maxPrice: 27.00,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80'
        }
    };

    return productIds.map(id => allProducts[id]).filter(product => product);
}

export default function Page({ params }) {
    const productId = params.id;
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // 在客户端获取产品数据
    useEffect(() => {
        async function loadData() {
            try {
                const productData = await getProductById(productId);
                if (productData) {
                    setProduct(productData);
                    
                    // 获取相关产品
                    if (productData.relatedProducts && productData.relatedProducts.length) {
                        const related = await getRelatedProducts(productData.relatedProducts);
                        setRelatedProducts(related);
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error("Error loading product:", error);
                setLoading(false);
            }
        }
        
        loadData();
    }, [productId]);

    // 处理鼠标移动实现放大效果
    const handleMouseMove = (e) => {
        if (!imageContainerRef.current) return;
        
        const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        setImagePosition({ x, y });
    };

    if (loading) {
        return <div>loading</div>;
    }

    if (!product) {
        notFound();
    }

    // 准备轮播图的数据
    const carouselSlides = product.images.map((image, index) => ({
        id: index,
        content: (
            <div className="relative w-full h-full">
                <Image 
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    unoptimized
                />
            </div>
        )
    }));

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* 面包屑导航 */}
            <div className="mb-8 text-sm">
                <nav className="text-gray-500">
                    <Link href="/" className="hover:text-mainColorNormal">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/product" className="hover:text-mainColorNormal">{product.category}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{product.name}</span>
                </nav>
            </div>

            {/* 商品详情主体 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* 左侧商品图片 - 使用轮播组件 */}
                <div className="aspect-[4/3]">
                    <Carousel slides={carouselSlides} />
                </div>

                {/* 右侧商品信息 */}
                <div>
                    {/* 商品名称 */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {product.name}
                    </h1>

                    {/* 价格 */}
                    <div className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        ${product.price.toFixed(2)}
                        <span className="text-sm font-normal text-gray-600 ml-2">+ Free Shipping</span>
                    </div>

                    {/* 商品描述 */}
                    <div className="text-gray-700 mb-8">
                        <p>{product.description}</p>
                    </div>

                    {/* 获取免费报价按钮 */}
                    <div className="mb-8">
                        <button 
                            className="bg-mainColorNormal hover:bg-mainColorDark text-white py-3 px-6 transition-colors w-full text-center font-medium"
                        >
                            GET A FREE QUOTE
                        </button>
                    </div>

                    {/* 商品分类 */}
                    <div className="text-sm text-gray-600">
                        <span>Category: </span>
                        <Link href={`/product?category=${product.category.toLowerCase()}`} className="text-mainColorNormal">
                            {product.category}
                        </Link>
                    </div>
                </div>
            </div>

            {/* 产品选项卡 */}
            <div className="mt-16">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <a
                            href="#"
                            className="border-mainColorNormal text-mainColorNormal whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                            Description
                        </a>
                        <a
                            href="#"
                            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                            Additional information
                        </a>
                        <a
                            href="#"
                            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                            Reviews (0)
                        </a>
                    </nav>
                </div>

                {/* 选项卡内容 */}
                <div className="py-10">
                    <h3 className="text-2xl font-bold mb-6">Product description</h3>
                    <p className="text-gray-700">
                        {product.longDescription}
                    </p>
                </div>
            </div>

            {/* 产品推荐 */}
            {relatedProducts.length > 0 && (
                <div className="mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-left mb-12">Related products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="group">
                                <div className="relative mb-6 overflow-hidden bg-gray-100">
                                    <Link href={`/product/${relatedProduct.id}`}>
                                        <div className="relative w-full pt-[100%]">
                                            <Image 
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                                unoptimized
                                            />
                                        </div>
                                    </Link>
                                </div>
                                
                                <Link href={`/product/${relatedProduct.id}`}>
                                    <h3 className="text-gray-800 font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                                </Link>
                                <p className="text-sm text-gray-500 mb-2">{relatedProduct.category}</p>

                                
                                <div className="font-semibold text-mainColorNormal">
                                    {relatedProduct.maxPrice ? (
                                        <span>${relatedProduct.price.toFixed(2)} – ${relatedProduct.maxPrice.toFixed(2)}</span>
                                    ) : (
                                        <span>${relatedProduct.price.toFixed(2)}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}