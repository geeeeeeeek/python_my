import DownloadList from "@/components/index/sections/downloadList";
import Banner from "@/components/index/sections/banner";


export default function Page() {


    return (
        <div>

            <div  className="w-full h-[200px]">
                <Banner title="Download" imageUrl=""/>
            </div>

            <DownloadList />

        </div>
    )
}
