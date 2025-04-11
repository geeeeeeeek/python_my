import GetInTouch from "@/components/index/sections/getInTouch";
import Carousel from "@/components/index/sections/carousel";
import RecommendedForYou from "@/components/index/sections/recommendedForYou";
import FacilityArea from "@/components/index/sections/facilityArea";

export default function Page() {

    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px]">
                <Carousel title="Contact"/>
            </div>

            <GetInTouch />

            <RecommendedForYou />

            <FacilityArea />

        </div>
    );
}