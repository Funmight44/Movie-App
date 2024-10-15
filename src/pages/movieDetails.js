import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../images/backup.png"


const MovieDetails = () => {
const params = useParams();
const [data, setData] = useState({});

const imageUrl = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : Backup;

useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7648717bb93a9db4eabb890847208d40`)
        const json = await response.json()
        setData(json)
    }
    fetchData();
}, 
[]);

 //getting the document title
useEffect(() => {
    document.title = `${data.title}/Cineamte`
});

    return ( 
        <main>
            <section className="movieDetails">
                <div className="max-w-sm">
                    <img src={imageUrl}  alt={data.title}  className="rounded-lg"/>
                </div>

                <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                    <h1 className="text-4xl text-bold my-3 text-center lg:text-left">{data.title}</h1>
                    <p className="my-4">{data.overview}</p>
                    {data.genres ? (
                        <p className="spans">
                            {data.genres.map((genre)=> (
                                <span>{genre.name}</span>
                            ))}
                        </p>
                    ) : ""}
                    
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{data.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className=" text-gray-900 underline hover:no-underline dark:text-white">{data.vote_count} reveiws</span>
                    </div>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Runtime:</span>
                        <span>{data.runtime} min</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Budget:</span>
                        <span>{data.budget}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Revenue:</span>
                        <span>{data.revenue}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Release Date:</span>
                        <span>{data.release_date}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">IMDB:</span>
                        <a href= {`https://www.imdb.com/title/${data.imdb_id}`} target="blank" rel="noreferrer">{data.imdb_id}</a>
                    </p>

                </div>
            </section>
        </main>
     );
}
 
export default MovieDetails;