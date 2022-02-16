import { Card } from "react-bootstrap";
function FavList(props) {
    console.log(props.favoriteList)
    return (
        <>
            <p>Fav list</p>
            <main>

                {

                    (props.favoriteList ?? []).map(movie => {
                        return (
                            <Card key={movie.id} style={{ width: '20rem', margin: '20px 25%' }}>
                                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.img}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.comment}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }



            </main>

        </>
    )
}
export default FavList