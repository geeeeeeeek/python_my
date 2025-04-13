import ProductList from "@/components/index/sections/productList";
import Carousel from "@/components/index/sections/carousel";
import FacilityArea from "@/components/index/sections/facilityArea";

export default async function Page({ params, searchParams }) {
    // 解析slug参数
    const slug = params?.slug || [];

    // 解析category和page
    let categoryId = null;
    let pageNumber = 1;

    // 解析不同的路由模式
    if (slug.length > 0) {
        if (slug[0] === 'category' && slug.length >= 2) {
            // 处理 /product/category/[id] 和 /product/category/[id]/page/[number]
            categoryId = slug[1];

            // 检查是否还有页码
            if (slug.length >= 4 && slug[2] === 'page') {
                pageNumber = parseInt(slug[3], 10) || 1;
            }
        } else if (slug[0] === 'page' && slug.length >= 2) {
            // 处理 /product/page/[number]
            pageNumber = parseInt(slug[1], 10) || 1;
        }
    }

    // 获取搜索参数
    const searchQuery = searchParams?.s || '';

    return (
        <div className="">

            <div className="w-full h-[200px]">
                <Carousel title="Product"/>
            </div>

            <ProductList
                categoryId={categoryId}
                pageNumber={pageNumber}
                total={100}
                searchQuery={searchQuery}
            />

            <FacilityArea />
        </div>
    );
}