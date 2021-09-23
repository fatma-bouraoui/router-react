import React from 'react';
import {Card} from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
export const Moviecard = ({movie}) => {
    return (
        <div>
            <Link to={`/movie/${movie.id}`}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterurl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
  </Card.Body>
  <ReactStars
    count={5}
    size={24}
    edit={false}
    value={movie.rating}
    activeColor="#ffd700"
  />
 
</Card>
 </Link>
        </div>
    )
}
