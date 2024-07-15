"use server";
export default async function FetchingCMS() {
    const data = await fetch("https://cdn.contentful.com/spaces/8bx9d5ltomyv/environments/master/entries?access_token=WO8oRuNXeOKC41pfP-fPEnTY-KCTI10RP6-D4bO8o8M");
    const result = await data.json();

    return (
        <div>{
            result.items[0].fields.content.content[0].content[0].value //Lanngsung konten ke 1
        }
            {result.items.map((item: any, idx: number) => {
                return (
                    <div >
                        <p>{item.fields.category}</p>
                        <p className="mb-5">{item.fields.content.content[0].content[0].value}</p>
                    </div>
                );
            })}
        </div>
    );
}