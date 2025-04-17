'use client'
import Link from 'next/link';
import Image from 'next/image';

// 模拟精选产品数据
const products = [
    {
        id: 1,
        name: 'DNK Yellow Shoes',
        originalPrice: 150.00,
        price: 120.00,
        isOnSale: true,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 2,
        name: 'DNK Blue Shoes',
        price: 200.00,
        maxPrice: 240.00,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 3,
        name: 'Dark Brown Jeans',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 4,
        name: 'Blue Denim Jeans',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 5,
        name: 'Basic Gray Jeans',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 6,
        name: 'White Sneakers',
        price: 180.00,
        image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 7,
        name: 'Black Leather Jacket',
        price: 250.00,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 8,
        name: 'Fashion Backpack',
        originalPrice: 120.00,
        price: 99.00,
        isOnSale: true,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    }
];

// 产品卡片组件
function ProductCard({ product }) {
    return (
        <div className="group">
            <div className="relative mb-4 overflow-hidden bg-gray-100 aspect-square">
                <Link href={`/product/${product.id}`}>
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </div>
                </Link>
            </div>

            <h3 className="text-lg font-medium mb-1">
                <Link href={`/product/${product.id}`} className="hover:text-mainColorNormal transition-colors">
                    {product.name}
                </Link>
            </h3>
            
            <div className="mb-2">
                {product.isOnSale ? (
                    <div className="flex items-center">
                        <span className="text-gray-400 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
                        <span className="font-bold text-mainColorNormal">${product.price.toFixed(2)}</span>
                    </div>
                ) : product.maxPrice ? (
                    <span className="font-medium">${product.price.toFixed(2)} – ${product.maxPrice.toFixed(2)}</span>
                ) : (
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                )}
            </div>
        </div>
    );
}

export default function FeaturedProducts() {
    return (
        <div className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                        We have a wide range of products and complete coverage of industry applications.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}