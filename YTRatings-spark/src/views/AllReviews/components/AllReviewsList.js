import React from 'react';
import {Container, Table, Header} from 'semantic-ui-react';

const ReviewTable = ({
                         data, sort, column, direction
                     }) => {
    return (
        <Container style={{paddingBottom: '2em'}}>
            <Header>All Reviews</Header>
            <p>There are {data.length} reviews</p>
            <Table sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell sorted={column === 'title' ? direction : null}
                                          onClick={sort('title')}>Title</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'rating' ? direction : null}
                                          onClick={sort('rating')}>Rating</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'category' ? direction : null}
                                          onClick={sort('category')}>Category</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'youtuberName' ? direction : null}
                                          onClick={sort('youtuberName')}>YouTuber</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {data && data.map(review =>
                    <Table.Body key={review._id}>
                        <Table.Row>
                            <Table.Cell>{review.title}</Table.Cell>
                            <Table.Cell>{review.rating}</Table.Cell>
                            <Table.Cell>{review.category}</Table.Cell>
                            <Table.Cell>{review.youtuberName}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                )}</Table>
        </Container>
    )
};

export default ReviewTable;
