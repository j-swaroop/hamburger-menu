// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => {
    return(
        <>
        <Header/>
        <div className="notfound-container">
            <img className="notfound-img" 
                alt="not found" src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" />
            <h1 className="not-found-heading"> Lost Your Way? </h1>
            <p className="not-found-description"> 
                Sorry, we cannot find that page. You will find lots to explore on the home page"
            </p>
        </div>
        </>
    )
}

export default NotFound