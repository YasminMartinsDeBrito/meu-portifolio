export const Footer = () => {
    return(
        <footer className="footer">

            {/* OPÇÔES */}
            <section>
            <h3>MENU</h3>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Quem sou</li>
                    <li>O que faço?</li>
                    <li>Portifólio</li>
                    <li>Vlog</li>
                    <li>Contato</li>
                </ul>
            </nav>

            {/* MINHAS REDES SOCIAIS */}
            <h3>REDES SOCIAIS</h3>
            <nav>
                <ul>
                    <li><a href="https://www.instagram.com/yasminh.marcelino/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/yasminmarcelino/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/YasminMartinsDeBrito" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </nav>
            </section>

            {/* CONTATO */}
            <section>
                <h3>CELULAR PARA CONTATO</h3>
                <h4>19 9 9149 5069</h4>

                <h3>EMAIL PARA CONTATO</h3>
                <h4>yasminmartinsdebrito@gmail.com</h4>
            </section>
        </footer>
    )
}