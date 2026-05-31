import Link from "next/link";
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";
import { Suspense } from "react";

export default async function DetailPost({
    params
}: {
    params: Promise<{id:string}>
}) {

    const {id} = await params;


    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return (
        <div>
            <Link href="/posts" className="mt-5 px-5">Voltar</Link>
            <h1>Detalhes do post: {id}</h1>
            <Suspense fallback={<h1>carregando...</h1>}>
            <PostInfo id = {id}/>
            </Suspense>
        </div>
    )
}