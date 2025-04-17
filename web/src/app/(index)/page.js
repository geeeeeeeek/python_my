import Carousel from "@/components/index/sections/carousel";
import FeaturedProducts from "@/components/index/sections/featuredProducts";
import FacilityArea from "@/components/index/sections/facilityArea";
import OurCategories from "@/components/index/sections/ourCategories";
import AboutUs from "@/components/index/sections/aboutUs";
import CustomersSay from "@/components/index/sections/customersSay";
import CompanyNews from "@/components/index/sections/companyNews";

export default function Home() {

    return (
        <div className="flex flex-col">

            <div  className="w-full h-[200px] md:h-[300px] lg:h-[600px]">
                <Carousel title=""/>
            </div>


            <FeaturedProducts />

            <OurCategories />

            <AboutUs />

            <CustomersSay />

            <CompanyNews />

            <FacilityArea />

        </div>
    );

}
