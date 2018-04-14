import React from 'react';
import {Container, Table, Header} from 'semantic-ui-react';

const ReviewTable = ({
                         data, name, category, goBack, sort, column, direction
                     }) => {
    return (<Container style={{paddingBottom: '2em'}}>
        <button onClick={goBack}>Go Back</button>
        <Header>{name}</Header>
        <Header>{category}</Header>
        <Table sortable>
            <Table.Header>

                <Table.Row>
                    <Table.HeaderCell sorted={column === 'title' ? direction : null} onClick={sort('title')}>Title</Table.HeaderCell>
                    <Table.HeaderCell sorted={column === 'rating' ? direction : null} onClick={sort('rating')}>Rating</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {data.map(review => {
                    return <Table.Body>
                        <Table.Row>
                            <Table.Cell>{review.title}</Table.Cell>
                            <Table.Cell>{review.rating}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                }
            )}  </Table>
    </Container>)

};

export default ReviewTable;
