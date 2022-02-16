import { Button, Modal, Form } from 'react-bootstrap/';
import {useRef} from 'react';
import React from 'react';


function ModalMovie(props) {
    console.log(props.Movie)
    const commentRef = useRef();
    function handleComment(refresh){
        refresh.preventDefault()
        const userComment = commentRef.current.value;
        const newData = {...props.Movie, userComment}
        props.updateComment(newData,props.Movie.id);
    }

    async function addToFavortie(movie){
        console.log(movie)
        try{
            const res = await fetch(`${process.env.REACT_APP_SERVER}/addMovie`, {
                method : 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                body: JSON.stringify({
                    title : movie.title,
                    img : movie.poster_path,
                    comment : movie.comment
                })
            })
            const data = await res.json();
            console.log(data)

        }catch(error){
            console.log("error",error);
        }
    }


    return (

        <>
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.Movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.Movie.poster_path}`} alt={props.Movie.title} />
                    <p>{props.Movie.title}</p>
                    <p>What do you think about this Movie?</p>
                    <p>{props.Movie.comment ? props.Movie.comment : "Add your comment ^_^"}</p>
                </Modal.Body>
                <Modal.Footer>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder= {props.Movie.comment ? props.Movie.comment : "Add Your Comment Here..."} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleComment}>
                        Add a Comment
                    </Button>
                    <Button className="addBtn" variant="primary" type="submit" onClick={()=>addToFavortie(props.Movie)}>
                        Add to favorite
                    </Button>
                <Button variant="secondary" onClick={props.handleColse}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>



    )

}
export default ModalMovie