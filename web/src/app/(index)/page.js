import Carousel from "@/components/index/carousel";

export default function Home() {

    return (
        <div className="flex flex-col">

            <div  className="w-full h-[200px] md:h-[400px] lg:h-[600px]">
                <Carousel title=""/>
            </div>

            <div className="bg-purple-300 h-[1000px]"></div>

        </div>
    );

}
