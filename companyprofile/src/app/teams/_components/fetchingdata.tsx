export default async function FetchingData() {
    const res = await fetch(`https://randomuser.me/api/?results=10`, {
        method: "GET"
    })
    const data = await res.json()

    return (
        <div className="w-full">
            <div className="max-w-[1000px] mx-auto font-semibold">
                <div className="">
                    <h1 className="text-2xl font-black">/Teams</h1>
                    <div className="grid grid-cols-2 justify-center font-semibold">
                        {
                            data.results.map((item: any, idx: number) => (
                                <div key={idx} className="flex flex-col">
                                    <img src={item.picture.large} width={150} height={150} alt="team1" className="rounded-[10px]" />
                                    <p>{item.name.first} {item.name.last}</p>
                                    <p>{item.email}</p>
                                    <p>{item.phone}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}