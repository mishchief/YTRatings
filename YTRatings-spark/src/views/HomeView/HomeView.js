import React from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import HomeViewLayout from './components/HomeViewLayout';

function HomeView({data: {youtubers, refetch}}) {
    console.log(youtubers);
    return (
        <div>
            <HomeViewLayout />
            <button onClick={() => refetch()}>Refresh</button>
            <ul>{youtubers && youtubers.map(youtuber => <Link to={`/${youtuber.name}/`}>
                <li key={youtuber.id}>{youtuber.name}</li>
            </Link>)}</ul>
        </div>
    );
}

export default graphql(gql`
    query{
      youtubers{
        id
        name
      }
    }
`)(HomeView);
