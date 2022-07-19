import { Header } from "../../components/Header"
import { About } from "../../components/About"
import { Projects } from "../../components/Projects"
import { Skill } from "../../components/Skill"
import { Footer } from "../../components/Footer"
import { Container } from "@chakra-ui/react"


const Home = () => {

    return(
        <>
       <Header/>
        <main>
            <Container m='20px'>
                <About/>
                <Skill/>
                <hr/>
                <Projects/>
            </Container>
        </main>
        <Footer/>
        </>
    )
}
export default Home