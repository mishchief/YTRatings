import React from 'react';
import {Grid, List, Image, Container, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const CategoriesList = (categories) => {
    const data = categories.categories;
    return (
        <Container>
            {data && data.map(category => {
                return (
                    <Grid padded key={category._id}>
                        <Grid.Column>
                            <List animated>
                                <List.Item>
                                    <Link to={`/youtuber/${category.youtuberName}/${category.name}/`}><List.Content>
                                        <Image avatar
                                               src={category.youtuber[0].img}/><span>{category.youtuberName}</span>
                                        <List.Header>{category.name}</List.Header>
                                        <List.Description>{category.description}</List.Description>
                                    </List.Content></Link>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                )
            })}
        </Container>
    )
};

export default CategoriesList;
