import React, { useEffect,useState } from "react";
import MovieList from "../MovieList/MovieList";
function Home() {
    const [Data, setData] = useState();

    const fetchData = async () => {
        try {
            const responseRend = await fetch(`https://movie-app-faisal.herokuapp.com/trending`)
            const responseList = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=37ddc7081e348bf246a42f3be2b3dfd0")

            const RendData = await responseRend.json();
            const ListData = await responseList.json();
            setData(ListData.results)
            console.log(ListData.results)
            console.log(RendData)

        } catch (error) {
            console.log("error", error);
        }

    }
    useEffect(() => { fetchData(); }, [])


    return (
        <>
            <p>Home Page</p>

            <MovieList MovieData={Data}/>
        </>
    )
}
export default Home