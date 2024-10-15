import { useEffect } from "react";
import pNFImage from "../images/pagenotfound.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {

     //getting the document title
    useEffect(() => {
        document.title = `Page Not Found/Cineamte`
    });


    return ( 
        <main>
            <section  className="pageNotFound">
                <div>
                    <p className="dark:text-white">404, ops!!!</p>
                    <img src={pNFImage} alt="pgn" className="rounded max-w-lg"/>
                </div>
 
                <div>
                    <Link to="/">
                    <button className="w-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Back to Cinemate</button></Link>
                </div>
            </section>
        </main>
     );
}
 
export default PageNotFound;