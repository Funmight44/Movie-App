
import Card from "../components/main";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const MovieLists = ({apiPath, title}) => {
   const {data: movies, isloading} = useFetch(apiPath)

   //getting the document title
   useEffect(() => {
    document.title = `${title}/Cineamte`
  });
   

    return ( 
        <main>
            {isloading && <div className="text-3xl mx-2">Loading.... </div>}
            <section>
                <div className="cards other:justify-evenly">  
                    { movies.map((movie) => (
                         <Card key={movie.id} movie={movie}/>
                    ))}              
                </div>
            </section>
        </main>
        
     );
}
 
export default MovieLists;