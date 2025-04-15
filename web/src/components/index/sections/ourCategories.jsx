'use client'
import Link from 'next/link';
import Image from 'next/image';

// 模拟分类数据 - 减少到4个
const categories = [
    {
        id: 1,
        name: 'Men',
        image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    },
    {
        id: 2,
        name: 'Women',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    },
    {
        id: 3,
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    },
    {
        id: 4,
        name: 'Footwear',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&q=80',
    }
];

// 分类卡片组件
function CategoryCard({ category }) {
    return (
        <Link href={`/product/category/${category.id}`} className="block group">
            <div className="overflow-hidden aspect-square mb-3">
                <div className="relative w-full h-full">
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-mainColorNormal transition-colors">{category.name}</h3>
            </div>
        </Link>
    );
}

export default function OurCategories() {
    return  (
        <div className="py-16 bg-mainColorLight">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Categories</h2>
                    <div className="w-24 h-1 bg-mainColorNormal mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Link 
                        href="/product" 
                        className="inline-block px-6 py-3 bg-mainColorNormal text-white font-medium rounded-md hover:bg-mainColorDeep transition-colors duration-300"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </div>
    )
}