import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link href="/" >Sobre</Link>
                    <Link href="/contatos" >Contatos</Link>
                </div>
            </nav>
        </header>
    )
}