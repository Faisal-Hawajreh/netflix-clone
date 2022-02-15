import { Card, Button } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';
import React, { useState } from "react";
function Movie(props) {
    const [showModal, setShowModal] = useState(false);
    const [Movie, setMovie] = useState();
    
    // console.log(props.data)
    return (
        <>
            <Card style={{ width: '25rem',margin: '20px 10%'}}>
                <Card.Header>Movie id : {props.data.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.overview}
                    </Card.Text>
                    <Button variant="primary" onClick={() => { setMovie(props.data); setShowModal(true) }} >Add to favorite list</Button>
                </Card.Body>
            </Card>
            
            {showModal && <ModalMovie show={showModal} Movie={Movie} handleColse={() => { setShowModal(false) }}/>}
        </>
    )
}
export default Movie


