import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/index/sections/pagination';
import ProductList from "@/components/index/sections/productList";
import Carousel from "@/components/index/sections/carousel";

export default async function Page() {
    return (
        <div className="">

            <div className="w-full h-[200px]">
                <Carousel title="Product"/>
            </div>
            <ProductList/>
        </div>
    );
}