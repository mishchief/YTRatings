import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import CategoriesList from './components/CategoriesList';

function CategoriesView({data: {allCategories}}) {
    return (
        <div>
            {allCategories && <CategoriesList categories={allCategories}/>}
        </div>
    );
}

export default graphql(gql`
query {
    allCategories {
        _id
        name
        youtuberName
        description
        youtuber {
            img
        }
    }
}`)(CategoriesView);
