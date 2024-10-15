import { Route, Routes } from "react-router-dom";
import MovieLists from "../pages/MovieLists";
import MovieDetails from "../pages/movieDetails";
import Search from "../pages/search";
import PageNotFound from "../pages/PageNotFound";




const AllRoutes = () => {
    return ( 
        <div className="dark:bg-darkbg">
          <Routes>
            <Route path=""  element={<MovieLists apiPath="movie/now_playing" title="Home" />}  />
            <Route path="/movie/:id"  element={<MovieDetails/>}  />
            <Route path="/movies/popular"  element={<MovieLists apiPath="movie/popular"  title="Popular"/>}  />
            <Route path="/movies/top_rated"  element={<MovieLists  apiPath="movie/top_rated"  title="Top rated"/>}  />
            <Route path="/movies/upcoming"  element={<MovieLists  apiPath="movie/upcoming"  title="Upcoming"/>}  />
            <Route path="/search"  element={<Search  apiPath="search/movie"/> }  />
            <Route path="*"  element={<PageNotFound/>}  />        
        </Routes>
        </div>
        
     );
}
 
export default AllRoutes;