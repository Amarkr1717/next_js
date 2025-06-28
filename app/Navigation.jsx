import Link from "next/link";

const Navigation = () => {
    return(
       <header className=" grid grid-cols-2">
        <div>Logo</div>
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <Link href="/Services">Services</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
       </header>
    )
}

export default Navigation;