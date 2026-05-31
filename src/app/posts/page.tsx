import Link from "next/link";


// server component
export interface PostProps{
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps{
    posts: PostProps[]
}

export const revalidate = 60;

export default async function Posts() {

    const response = await fetch('https://dummyjson.com/posts', {
        cache: 'force-cache',
        next: {
            revalidate:60 /*isso ja força cache automaticamente */
        }
    }





    )


    const data: ResponseProps = await response.json()

    


    return(
        <div>
            <h1 className="font-bold text-center mb-2 mt-5 text-3xl">
                Posts
            </h1>

        <div className="flex flex-col gap-4 mx-4">
            {data.posts.map(post => (
                <div className="bg-gray-200 p-4 rounded-md" key={post.id}>
                    <h1 className="mt-5 mb-2 font-bold">{post.title}</h1>
                    <p>{post.body}</p>
                    <Link href={`/posts/${post.id}`} className="text-blue-500">Visualizar post</Link>
                </div>
            ))}
        </div>

        </div>
    )
}