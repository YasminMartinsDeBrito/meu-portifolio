import "../styles.css"

export const Header  = () => {
    return(
        <>
         <header className="header">
            <nav>
                <ul className="list-ul">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skill</a></li>
                    <li><a href="#projects">Projects</a></li>
  
                </ul>
            </nav>
        </header>
        </>
    )
}