import Image from 'next/image';
import Link from 'next/link';
import ProductTabs from '@/components/index/sections/productTabs';
import ProductCover from "@/components/index/sections/productCover";

// 模拟产品数据
const product = {
    id: 1,
    name: 'Basic Gray Jeans',
    category: 'Women',
    price: 150.00,
    images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1608236415053-3691791bbffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    ],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    description: `Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.`,
    longDescription: `Since it's creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
}

const relatedProducts = [
    {
        id: 1,
        name: 'Gray Pattern Tshirt',
        category: 'Women',
        price: 30.00,
        maxPrice: 34.00,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }, {
        id: 2,
        name: 'Bright Gold Purse With Chain',
        category: 'Accessories',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
    }, {
        id: 3,
        name: 'Purple Tshirt',
        category: 'Women',
        price: 25.00,
        maxPrice: 27.00,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80'
    }, {
        id: 3,
        name: 'Purple Tshirt',
        category: 'Women',
        price: 25.00,
        maxPrice: 27.00,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80'
    }
]

export default async function Page() {
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
                    <ProductCover />
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
                        <Link href={`/product?category=${product.category.toLowerCase()}`}
                              className="text-mainColorNormal">
                            {product.category}
                        </Link>
                    </div>
                </div>
            </div>

            {/* 产品选项卡 */}
            <ProductTabs product={product} />

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