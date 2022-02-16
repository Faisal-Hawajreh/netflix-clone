import { Card, Button } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';
import React, { useState } from "react";
function Movie(props) {
    const [showModal, setShowModal] = useState(false);
    const [Movie, setMovie] = useState();

    // console.log(props.data)
    return (
        <>
            <Card style={{ width: '20rem', margin: '20px 25%' }}>
                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.data.comment ? props.data.comment : "No comment.."}
                    </Card.Text>
                    <Button variant="primary" onClick={() => { setMovie(props.data); setShowModal(true) }} >Add to favorite list</Button>
                </Card.Body>
            </Card>

            {showModal && <ModalMovie show={showModal} Movie={Movie} handleColse={() => { setShowModal(false) }} updateComment={props.updateComment}/>}
        </>
    )
}
export default Movie


