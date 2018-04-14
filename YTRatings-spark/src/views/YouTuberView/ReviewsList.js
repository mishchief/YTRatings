import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Header} from 'semantic-ui-react';


const ReviewList = (youtuber) => {
    const data = youtuber.youtuber;
    const name = data.name;
    return (
        <Container>
            <Header>{name}</Header>
        <ul>{data && data.categories.map(category => <Link to={`/${name}/${category.category}/`}>
            <li key={category.id}>{category.category}</li>
        </Link>)}</ul>
    </Container>)

};

export default ReviewList;
