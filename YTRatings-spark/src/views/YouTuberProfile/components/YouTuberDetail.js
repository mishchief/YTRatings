import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Image, List, Grid, Divider} from 'semantic-ui-react';


const YouTuberDetail = (youtuber) => {
    const data = youtuber.youtuber;
    return (
        <Container>
                <Grid padded >
                    <Grid.Column width={2}>
                        <Image size='small' src={data.img}/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <List>
                            <List.Item>
                                <List.Icon name='user'/>
                                <List.Content>{`YouTube Handle: ${data.name}`}</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='youtube'/>
                                <List.Content as='a' href={data.uri}>Channel</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='info'/>
                                <List.Content>{`Total Reviews: ${data.reviews.length}`}</List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            <Divider/>
                <List animated verticalAlign='middle'>
                    <h1>Categories</h1>
                    {data && data.categories.map(category =>
                        <List.Item key={category._id}>
                            <List.Content>
                                <List.Header>
                                    <Link to={`/youtuber/${data.name}/${category.name}/`}>
                                        {category.name}
                                    </Link>
                                </List.Header>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
        </Container>)

};

export default YouTuberDetail;
