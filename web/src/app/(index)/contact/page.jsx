import GetInTouch from "@/components/index/sections/getInTouch";
import Carousel from "@/components/index/carousel";
import RecommendedForYou from "@/components/index/sections/recommendedForYou";

export default function Page() {

    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px]">
                <Carousel title="Contact"/>
            </div>

            <GetInTouch />

            <RecommendedForYou />
        </div>
    );
}