import Carousel from "@/components/index/carousel";
import Image from "next/image";

export default function Page() {
    // 团队成员数据
    const teamMembers = [
        {
            id: 1,
            name: "Harvey Spector",
            position: "Founder - CEO",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
        },
        {
            id: 2,
            name: "Jessica Pearson",
            position: "COO",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
        },
        {
            id: 3,
            name: "Rachel Zain",
            position: "Marketing Head",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
        },
        {
            id: 4,
            name: "Luise Litt",
            position: "Lead Developer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
        },
        {
            id: 5,
            name: "Katrina Bennett",
            position: "Intern Designer",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
        },
        {
            id: 6,
            name: "Mike Ross",
            position: "Intern Designer",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
        }
    ];

    return (
        <div className="flex flex-col">
            <div  className="w-full h-[200px]">
                <Carousel title="About Us"/>
            </div>

            <div className="">
                
                {/* Who We Are 区域 */}
                <div className="bg-[#e7f6ff] p-8 lg:p-16">
                    <div className="flex flex-col lg:flex-row gap-8 ">
                        <div className="flex flex-col w-full lg:w-1/2 lg:h-[500px] bg-white p-8 lg:p-16">
                            <div className="h-1 w-16 bg-mainColor mb-6"></div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <p id="content" className="flex-1 text-gray-700 mb-4 overflow-hidden relative lg:max-h-[320px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                                <span className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></span>
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px]">
                            <div className="relative h-full  bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800&q=80"
                                    alt="Our Team"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Team 区域 */}
                <div className="py-12 lg:py-24">
                    <div className="text-center mb-12">
                        <div className="h-1 w-16 bg-mainColor mx-auto mb-6"></div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto mb-4 px-4">
                            we are passionate about crafting high-quality audio devices that deliver exceptional sound experiences.
                        </p>
                    </div>

                    {/* 团队成员卡片 - 动态渲染 */}
                    <div className="max-w-[800px] mx-auto px-8 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-green-50 rounded-lg p-8 text-center">
                                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 relative">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-gray-600 mb-4">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}