import Movie from "../Movie/Movie"

// import { CardGroup} from 'react-bootstrap';
function MovieList(props) {
    let data = props.MovieData
    return (
        <>
            <p>This is movie list</p>
            {console.log(data)}

                {
                    data && data.map((movie) => {
                        return (
                            <Movie data={movie} key={movie.id} />
                        )
                    })
                }

        </>
    )
}
export default MovieList

// import { Card, CardGroup, Button } from 'react-bootstrap';