import GetInTouch from "@/components/index/sections/getInTouch";
import Carousel from "@/components/index/carousel";

export default function Page() {

    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px]">
                <Carousel title="About Us"/>
            </div>

            <p>page</p>

            <GetInTouch />
        </div>
    );
}