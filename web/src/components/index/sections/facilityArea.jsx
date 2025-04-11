import { TruckIcon, HeadphonesIcon, ShieldCheckIcon, RefreshCwIcon } from 'lucide-react';

export default function FacilityArea() {
    // 数据变量
    const facilityItems = [
        {
            icon: <TruckIcon className="w-12 h-12 text-mainColorNormal" />,
            title: "Inventory is abundant.",
            description: "Delivery is prompt!"
        },
        {
            icon: <HeadphonesIcon className="w-12 h-12 text-mainColorNormal" />,
            title: "Professional consultation offered.",
            description: "By 10-year industry experts!"
        },
        {
            icon: <ShieldCheckIcon className="w-12 h-12 text-mainColorNormal" />,
            title: "Credit is guaranteed.",
            description: "Diverse payment methods available!"
        },
        {
            icon: <RefreshCwIcon className="w-12 h-12 text-mainColorNormal" />,
            title: "100% repeat purchase.",
            description: "Unbeatable cost performance!"
        }
    ];

    return (
        <section className="py-10 bg-mainColorLight">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-4">
                    {facilityItems.map((item, index) => (
                        <div key={index} className={`flex items-center p-4 relative ${
                            index < facilityItems.length - 1 ? 'lg:after:content-[""] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-16 lg:after:w-px lg:after:bg-gray-200' : ''
                        }`}>
                            <div className="mr-4">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}