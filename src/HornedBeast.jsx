import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function HornedBeast(props) {

    const [favorites, setFavorites] = useState(0);

    const handleFavoriteClick = () => setFavorites(favorites+1);

    return(
        <>
            {/* <h2>{props.title}</h2>
            <img src={props.imagenURL} style={{width:'200px'}} alt={props.alt}/>
            <p>{props.description}</p>
            <p>Horns: {props.horns}</p>
            <button onClick={handleFavoriteClick} style = {{fontSize: '16px', padding: '5px 5px', cursor: 'pointer'}}>❤️: {favorites}</button> */}

            <Card style={{ width: '18rem', marginBottom: '10px'}}>
                <Card.Img variant="top" src={props.imagenURL} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary"onClick={handleFavoriteClick} style = {{fontSize: '16px', padding: '5px 5px', cursor: 'pointer'}}>❤️: {favorites}</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default HornedBeast;