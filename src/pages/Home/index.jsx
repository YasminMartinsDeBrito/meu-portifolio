import { Header } from "../../components/Header"
import { About } from "../../components/About"
import { Projects } from "../../components/Projects"
import { Skill } from "../../components/Skill"
import { Footer } from "../../components/Footer"


const Home = () => {

    return(
        <>
       <Header/>
        <main>
            <About/>
            <Skill/>
            <Projects/>
        </main>
        <Footer/>
        </>
    )
}
export default Home