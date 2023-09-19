import Link from "next/link";

export default function NavLink({link, name}) {
    return (
        <Link href={link}>
            <h6>{name}</h6>
        </Link>
    )
}