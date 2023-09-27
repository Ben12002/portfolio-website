import Navbar from "./Navbar"
import '../Header.css'

function Header(){

    return(
        <div className="header">
            <div className="name">
                <h1>Benedict Damian Tan</h1>
                <p>Web Developer, Machine Learning Novice, Hobbyist Photographer</p>
            </div>
            <Navbar />
        </div>
    )
}

export default Header