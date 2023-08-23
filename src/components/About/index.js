// Write your code here
import Header from '../Header'
import './index.css'

const About = () => {
    return(
        <>
        <Header/>
        <div className="about-container">
            <img className="img-sm" alt="about" src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png" />
            <img className="img-lg" alt="about" src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png" />
        </div>
        </>
    )
}

export default About