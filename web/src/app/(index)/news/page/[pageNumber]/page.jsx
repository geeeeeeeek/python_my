import Carousel from "@/components/index/sections/carousel";
import NewsList from "@/components/index/sections/newsList";


export default function Page({params}) {

    const { pageNumber } = params; // 解析页码参数，如 1，2，3 等
    console.log(pageNumber);

    return (
        <div className="bg-mainColorLight">

            <div  className="w-full h-[200px]">
                <Carousel title="News"/>
            </div>

            <NewsList />

        </div>
    )
}
