import Link from "next/link";

export default function NotFound() {
    return(
        <div className="flex flex-col gap-10 items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-5xl">
                Essa página não existe.
            </h1>
            
            <Link href='/'>Voltar para o início</Link>
           
        </div>
    )
}