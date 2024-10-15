import { useState, useEffect} from "react";

const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        async function getMovies() {
            setIsLoading(true)
            const response = await fetch(url);
            const dataJson = await response.json();
            setData(dataJson.results);
            setIsLoading(false)
        }
        getMovies();
    },
     [url])




    return {data, isLoading};
}
 
export default useFetch;