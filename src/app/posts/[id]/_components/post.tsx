import { PostProps } from "../../page";


export const revalidate = 60;
export async function PostInfo({ id }: {id:string}) {
        
        await new Promise(resolve => setTimeout(resolve,4000)); {/*simula atraso */}
        const response = await fetch(`https://dummyjson.com/posts/${id}`)
        const data: PostProps = await response.json()

        return (
            <div>
            <h1>Detalhes do post: {id}</h1>
            <h1>{data.title}</h1>
            <h1>{data.body}</h1>
            </div>
        )
    
}