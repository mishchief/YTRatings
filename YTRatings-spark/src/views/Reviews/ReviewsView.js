import _ from 'lodash';
import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import ReviewsTable from './components/ReviewsTable';

const query = gql`
query Anything($name: String! $category: String!){
    category (name: $category youtuberName: $name){
      name
      youtuberName
      reviews{
        _id
        title
        rating
      }
    }
}`;

class ReviewsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: this.props.match.params.category,
            column: null,
            tableData: [],
            direction: null,
        };
        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
    }

    loadTableData() {
        this.setState({tableData: this.props.data.category.reviews});
    }

    goBack() {
        this.props.history.goBack();
    }

    handleSort = clickedColumn => () => {
        const {column, tableData, direction} = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                tableData: _.sortBy(tableData, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            tableData: tableData.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        let {data} = this.props;
        if (data.loading) {
            return <div>Loading...</div>
        } else if (this.state.tableData.length === 0) {
            this.loadTableData();
        }
        return (<ReviewsTable data={this.state.tableData} category={this.state.categoryName} goBack={this.goBack}
                              sort={this.handleSort} column={this.state.column} direction={this.state.direction}
                              name={this.props.match.params.name}/>)
    }
}

const queryOptions = {
    options: props => ({
        variables: {
            name: props.match.params.name,
            category: props.match.params.category
        },
    }),
};

ReviewsView = graphql(query, queryOptions)(ReviewsView);
export default ReviewsView;
