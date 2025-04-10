import { TruckIcon, HeadphonesIcon, ShieldCheckIcon, RefreshCwIcon } from 'lucide-react';

export default function FacilityArea() {
    return (
        <section className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 lg:divide-x divide-gray-200">
                    {/* 库存充足 */}
                    <div className="flex items-center p-4">
                        <div className="mr-4">
                            <TruckIcon className="w-12 h-12 text-mainColor3" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Inventory is abundant.</h3>
                            <p className="text-gray-600 mt-1">Delivery is prompt!</p>
                        </div>
                    </div>

                    {/* 专业咨询 */}
                    <div className="flex items-center p-4">
                        <div className="mr-4">
                            <HeadphonesIcon className="w-12 h-12 text-mainColor3" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Professional consultation offered.</h3>
                            <p className="text-gray-600 mt-1">By 10-year industry experts!</p>
                        </div>
                    </div>

                    {/* 信用保证 */}
                    <div className="flex items-center p-4">
                        <div className="mr-4">
                            <ShieldCheckIcon className="w-12 h-12 text-mainColor3" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Credit is guaranteed.</h3>
                            <p className="text-gray-600 mt-1">Diverse payment methods available!</p>
                        </div>
                    </div>

                    {/* 100%重复购买 */}
                    <div className="flex items-center p-4">
                        <div className="mr-4">
                            <RefreshCwIcon className="w-12 h-12 text-mainColor3" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">100% repeat purchase.</h3>
                            <p className="text-gray-600 mt-1">Unbeatable cost performance!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}