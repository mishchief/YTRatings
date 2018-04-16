import React from 'react';
import {Grid, Image, Container, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const YouTubersGrid = (youtubers) => {
    const data = youtubers.youtubers;
    return (
        <Container>
            <Grid padded stackable centered relaxed>
                <Grid.Row columns={data.length} >
                    {data.map(youtuber =>
                        <Grid.Column key={youtuber._id} >
                            <Link to={`/youtuber/${youtuber.name}/`}>
                                <Image size='medium' src={youtuber.img} centered />
                                <Header content={`${youtuber.name} Reviews`} textAlign='center'/>
                            </Link>
                        </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>
        </Container>
    )
};

export default YouTubersGrid;
