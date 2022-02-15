import { Button, Modal, Form } from 'react-bootstrap/';

function ModalMovie(props) {
    console.log(props)
    return (

        <>
            <p>Hello there</p>
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.Movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' alt={props.Movie.title} />
                    <p>{props.Movie.title}</p>
                </Modal.Body>
                <Modal.Footer>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control type="textarea" placeholder= "Add Your Comment Here..." />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit">
                        Add a Comment
                    </Button>
                <Button variant="secondary" onClick={props.handleColse}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>



    )

}
export default ModalMovie