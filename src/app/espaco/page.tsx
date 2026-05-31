



interface ResponseProps{
    date:string;
    explanation: string;
    title:string;
    url: string;
}



export default async function Espaco() {
    
    const response = await fetch('http://api.nasa.gov/planetary/apod?api_key=V3F3hXTCcoSqw4Vw2DUeD7PUbKLaCt59EUZTLb5y')
    const data:ResponseProps = await response.json()

    return(
        <div className="mx-15">
            <h1 className="text-center font-bold mt-5 mb-2">Imagem de hoje, {data.date}</h1>
            <h1 className="text-center text-5xl">{data.title}</h1>
            <div className="flex flex-line mt-5 gap-4">
                <h1 className="text-3xl">{data.explanation}</h1>
                <img className="mx-auto" src={data.url}/>
            </div>
        </div>
    )
}