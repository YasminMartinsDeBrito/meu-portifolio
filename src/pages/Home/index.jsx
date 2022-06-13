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
            <hr/>
            <Skill/>
            <hr/>
            <Projects/>
        </main>
        <Footer/>
        </>
    )
}
export default Home