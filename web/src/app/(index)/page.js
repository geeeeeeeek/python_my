import Carousel from "@/components/index/sections/carousel";

export default function Home() {

    return (
        <div className="flex flex-col">

            <div  className="w-full h-[200px] md:h-[300px] lg:h-[400px]">
                <Carousel title=""/>
            </div>

            <div className="bg-purple-300 h-[1000px]"></div>

        </div>
    );

}
