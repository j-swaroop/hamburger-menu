// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => {
    return(
        <>
        <Header/>
        <div className="home-container">
            <img className="img-sm" alt="home" src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png" />
            <img className="img-lg" alt="home" src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png" />
        </div>
        </>
    )
}

export default Home