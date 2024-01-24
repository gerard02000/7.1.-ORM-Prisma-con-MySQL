import Link from "next/link"

function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/articulos">Artículos</Link>
                <hr />
                <Link href="/proveedores">Proveedores</Link>
            </div>
            <div>
                <Link href="/acerca">Acerca de ...</Link>
            </div>
        </nav>
    )
}

export default Navbar