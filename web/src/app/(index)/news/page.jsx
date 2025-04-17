import NewsList from "@/components/index/sections/newsList";
import Banner from "@/components/index/sections/banner";


export default function Page() {



    return (
        <div className="bg-mainColorLight">

            <div  className="w-full h-[200px]">
                <Banner title="News" imageUrl=""/>
            </div>

            <NewsList pageNumber={1} total={100} />

        </div>
    )
}
