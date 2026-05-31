import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Aprenda Next JS!",
  description: "Criando esse site você aprenderá conceitos básicos do Next JS",
  openGraph: {
    title: 'Aprendendo Next JS do zero!',
    description: 'Você irá aprender na prática.'
  },
  robots:{
    index:true,
    follow:true,
    nocache: true,
    
  }
}


export const revalidate = 60;

export default function Home(){
  return(
    <div>
      <h1>numero aleatorio gerado {Math.random() * 10}</h1>
      <h1>oi</h1>
    </div>
  )
}