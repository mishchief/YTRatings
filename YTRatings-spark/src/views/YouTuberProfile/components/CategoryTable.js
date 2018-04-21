//TODO: create this component so that when people click on the category the review table shows up to the right on the detail view
import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Image, List, Grid, Divider} from 'semantic-ui-react';
import ReviewTable from "./ReviewTable";


const CategoryTable = (categories) => {
    return(
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
    )
}

export default CategoryTable;
