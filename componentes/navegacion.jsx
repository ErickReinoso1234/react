import Link from 'next/link';
function navegacio() {
    return (
        <>
            <h1>formulario general de clientes</h1>
            <ul>
                <li>
                    <Link href="/clientes">clientes</Link>
                </li>
                <li>
                    <Link href="/segunda">segunda</Link>
                </li>
            </ul>
        </>
    )
}
export default navegacio