export function Header({ title, text }) {
    return (
        <header className="header">
            <h1>
                {title}
            </h1>
            <p>{text}</p>
        </header>
    )
}