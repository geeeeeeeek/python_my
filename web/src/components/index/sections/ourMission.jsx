
const stats = [
    { label: 'Transactions every 24 hours', value: '44,000' },
    { label: 'Assets under holding', value: '$119 million' },
    { label: 'New users annually', value: '46,000' },
]

export default function OurMission() {
    return (
        <div className="mx-auto  max-w-7xl px-6 sm:mt-0 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-pretty text-2xl  sm:text-4xl font-semibold tracking-tight text-gray-900">Our mission</h2>
                <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                    <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                        <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                            semper sed amet vitae sed turpis id.Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                            semper sed amet vitae sed turpis id. sed amet vitae sed turpis id.Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est.
                        </p>
                    </div>
                    <div className="lg:flex lg:flex-auto lg:justify-center">
                        <dl className="w-64 space-y-8 xl:w-80">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}