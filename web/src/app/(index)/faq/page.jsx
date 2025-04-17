import FaqList from "@/components/index/sections/faqList";
import FacilityArea from "@/components/index/sections/facilityArea";
import Banner from "@/components/index/sections/banner";


export default function Page() {


    return (
        <div className="bg-white">

            <div  className="w-full h-[200px]">
                <Banner title="Download" imageUrl=""/>
            </div>

            <FaqList />

            <FacilityArea />

        </div>
    )
}
