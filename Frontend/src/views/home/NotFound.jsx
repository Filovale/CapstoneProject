import logoPageNotFound404 from "./errore-404.jpg";
import "./NotFound.css";

export default function NotFound () {


    return (
        
        <div className="not-found-container">
            <img src={logoPageNotFound404} alt="404 Not Found" className="not-found-image" />
            <h1 className="not-found-title">404 Not Found</h1>
            <p className="not-found-text">The page you are looking for does not exist.</p>
        </div>
    )
}