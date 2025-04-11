import Link from 'next/link';
import Image from 'next/image';

// 模拟获取案例详情数据
async function getCaseDetail(id) {
    // 这里应该是从API获取数据
    const caseData = {
        id: 1,
        title: 'Global E-commerce Platform Redesign',
        client: 'TechRetail Inc.',
        category: 'E-commerce',
        description: 'Complete redesign of a global e-commerce platform resulting in 45% increase in conversions and 30% reduction in cart abandonment.',
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        content: `
                <h2>Project Background</h2>
                <p>TechRetail Inc. is a global e-commerce company facing challenges with low conversion rates and high cart abandonment. They needed a complete platform redesign to enhance user experience and business performance.</p>
                
                <h2>Challenges</h2>
                <ul>
                    <li>Complex user interface leading to high bounce rates</li>
                    <li>Poor mobile experience</li>
                    <li>Cumbersome checkout process</li>
                    <li>Lack of personalized recommendations</li>
                </ul>
                
                <h2>Solutions</h2>
                <p>We implemented the following strategies to redesign the platform:</p>
                <ul>
                    <li>Simplified user interface, reducing unnecessary steps</li>
                    <li>Optimized mobile responsive design</li>
                    <li>Restructured checkout process, reducing steps</li>
                    <li>Introduced AI-driven personalized recommendation system</li>
                </ul>
                
                <h2>Results</h2>
                <ul>
                    <li>45% increase in conversion rate</li>
                    <li>30% reduction in cart abandonment</li>
                    <li>60% increase in mobile conversion rate</li>
                    <li>40% improvement in customer satisfaction</li>
                </ul>
            `,
        date: 'June 2023',
        relatedCases: [2, 3, 4]
    }
    return caseData;
}

// 模拟获取产品分类数据
async function getProductCategories() {
    return [
        {id: 1, name: 'Industrial Equipment', count: 12},
        {id: 2, name: 'Electronic Components', count: 8},
        {id: 3, name: 'Mechanical Parts', count: 15},
        {id: 4, name: 'Chemical Products', count: 6},
        {id: 5, name: 'Building Materials', count: 9},
    ];
}

// 模拟获取推荐产品数据
async function getRecommendedProducts() {
    return [
        {
            id: 1,
            name: 'Industrial 3D Printer',
            imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            price: '$2,999',
            category: 'Industrial Equipment'
        },
        {
            id: 2,
            name: 'High-Precision Sensor',
            imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            price: '$499',
            category: 'Electronic Components'
        },
        {
            id: 3,
            name: 'Hydraulic Pump System',
            imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            price: '$1,299',
            category: 'Mechanical Parts'
        }
    ];
}

export default async function Page({params}) {
    const {id} = params;
    const caseDetail = await getCaseDetail(id);
    const categories = await getProductCategories();
    const recommendedProducts = await getRecommendedProducts();

    if (!caseDetail) {
        return <div>Case not found</div>;
    }

    return (
        <div className="bg-mainColorLight py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* 左侧案例详情 */}
                    <div className="lg:col-span-2">
                        <article className="prose prose-lg max-w-none bg-white p-6 rounded-md border border-gray-200 shadow-md">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{caseDetail.title}</h1>

                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
                                <span>Client: {caseDetail.client}</span>
                                <span>•</span>
                                <span>{caseDetail.category}</span>
                                <span>•</span>
                                <span>{caseDetail.date}</span>
                            </div>

                            <div className="relative w-full h-96 mb-8 rounded-md overflow-hidden">
                                <Image
                                    src={caseDetail.imageUrl}
                                    alt={caseDetail.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="text-lg text-gray-600 mb-8">
                                {caseDetail.description}
                            </div>

                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{__html: caseDetail.content}}
                            />
                        </article>
                    </div>

                    {/* 右侧产品分类和推荐产品 */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-8">
                            {/* 产品分类 */}
                            <div className="bg-white border border-gray-200 rounded-md p-6 shadow-md">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Categories</h2>
                                <ul className="space-y-3">
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Link
                                                href={`/products?category=${category.id}`}
                                                className="flex items-center justify-between text-gray-600 hover:text-mainColorNormal transition-colors duration-300"
                                            >
                                                <span>{category.name}</span>
                                                <span className="text-sm text-gray-400">({category.count})</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 推荐产品 */}
                            <div className="bg-white border border-gray-200 rounded-md p-6 shadow-md">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Products</h2>
                                <div className="space-y-6">
                                    {recommendedProducts.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={`/products/${product.id}`}
                                            className="block group"
                                        >
                                            <div className="relative h-40 rounded-md overflow-hidden mb-3 shadow-sm">
                                                <Image
                                                    src={product.imageUrl}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-mainColorNormal transition-colors duration-300">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {product.category}
                                            </p>
                                            <p className="text-mainColorNormal font-medium mt-1">
                                                {product.price}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}