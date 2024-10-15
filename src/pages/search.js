import { useEffect } from "react";
import Card from "../components/main";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";


const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data: movies, isLoading} = useFetch(apiPath, queryTerm)

   //getting the document title
   useEffect(() => {
    document.title = `Result for ${queryTerm}/Cinemate`
   })

    return (
        <main>
          {isLoading && <p>Loading.....</p>}
          <section className="py-2">
            <p className="text-2xl dark:text-white">
              {movies.length === 0 ? `Result not found for ${queryTerm}` : `Result for ${queryTerm}`}
            </p>
          </section>

          <section>
                <div className="cards">  
                    {movies.map((movie) => (
                         <Card key={movie.id} movie={movie}/>
                    ))}              
                </div>
            </section>
        </main>
      );
}
 
export default Search;