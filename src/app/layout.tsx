
import "./globals.css";
import { Header } from '../components/header'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body> {/*essa é a pagina inteira que sera renderizada*/}
        <Header/>
        
        {children}   {/*esse children é a página (arquivo) que está sendo renderizada. ou seja, se voce colocar algo em cima, vai aparecer em todas as páginas.*/}
        
        </body>
    </html>
  );
}
