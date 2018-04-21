import React from 'react';
import {Container, Table, Header} from 'semantic-ui-react';

const ReviewTable = ({
                         data, name, category, sort, column, direction
                     }) => {
    return (
        <Container style={{paddingBottom: '2em'}}>
            <Header>{category}</Header>
            <Header>By: {name}</Header>
            <Table sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell sorted={column === 'title' ? direction : null}
                                          onClick={sort('title')}>Title</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'rating' ? direction : null}
                                          onClick={sort('rating')}>Rating</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {data && data.map(review =>
                    <Table.Body key={review._id}>
                        <Table.Row>
                            <Table.Cell>{review.title}</Table.Cell>
                            <Table.Cell>{review.rating}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                )}</Table>
        </Container>
    )
};

export default ReviewTable;
