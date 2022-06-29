import Seo from "../components/Seo";
import { useEffect, useState } from 'react';

const API_KEY = "54dfd59cfdf058b6cef434245e51428e";

export default function Home(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
    (async () => {
       const { results } = await (await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )).json();
        setMovies(results);
    })();
    }, []);   
    return (
        <div>
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map(movies => <div key={movies.id}>
                <h4>{movies.original_title}</h4>
            </div>)}
        </div>
    );
}