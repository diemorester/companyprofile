import Coffee from "./coffee";

export default async function FetchCoffee() {
    const res = await fetch("https://cdn.contentful.com//spaces/8bx9d5ltomyv/environments/master/entries?access_token=QrILhUpSdnGVH--lCX4-MDaKWmY-enbds6Fjo_UzOPg",
        {
            method: "GET",
        }
    )

    const data = await res.json()
    
    return (
        <div className="w-full">
            <div className="max-w-[1000px] mx-auto">
                <h2 className="text-2xl font-black px-7 py-5">/KopiKalyan To-Go</h2>
                <div className="flex flex-wrap justify-center gap-5 rounded-sm">
                    {
                        data.items.map((item: any, idx: number) => {
                            return (
                                <div key={idx} >
                                    <Coffee name={item.fields.name} description={item.fields.description} price={item.fields.prices} image={data.includes.Asset[idx].fields.file.url} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}