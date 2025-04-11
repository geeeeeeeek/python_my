import Carousel from "@/components/index/sections/carousel";
import NewsList from "@/components/index/sections/newsList";


export default function Page({params}) {

    const pageNumber = parseInt(params.pageNumber, 10) || 1;

    return (
        <div className="bg-mainColorLight">

            <div  className="w-full h-[200px]">
                <Carousel title="News"/>
            </div>

            <NewsList pageNumber={pageNumber} total={100} />

        </div>
    )
}
