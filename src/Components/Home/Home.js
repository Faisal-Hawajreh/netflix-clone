import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import { Routes, Route } from "react-router-dom";
import FavList from "../FavList /FavList";

function Home() {
    const [Data, setData] = useState();
    const [favoriteList, SetFavList] = useState([])

    const fetchData = async () => {
        try {
            const responseRend = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const RendData = await responseRend.json();
            setData(RendData)
            // console.log(RendData)
        } catch (error) {
            console.log("error", error);
        }
    }
    const fetchData1 = async () => {
        try {

            const responseAddMovie = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`)
            const AddMovieData = await responseAddMovie.json();
            SetFavList(AddMovieData);
            console.log(AddMovieData)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => { fetchData(); fetchData1(); }, [])

    const updateComment = (data, id) => {
        let updatedMovie = Data.map(movie => {
            if (movie.id === id) {
                movie.comment = data.userComment;
                return movie;
            }
            else return movie
        })
        setData(updatedMovie);
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList MovieData={Data} updateComment={updateComment}/>} />
                <Route path="/FavList" element={<FavList favoriteList={favoriteList} />} />
            </Routes>


        </>
    )
}
export default Home