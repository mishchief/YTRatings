import _ from 'lodash';
import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import ReviewTable from './ReviewTable';

const query = gql`
  query Anything($name: String!){
  youtuber (name: $name){
    name
    categories{
      category
      reviews{
        title
        rating
      }
    }
}
}`;

class ReviewView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: this.props.match.params.category,
            column: null,
            tableData: [],
            direction: null,
        }
        this.goBack = this.goBack.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
    }

    loadTableData() {
            this.setState({tableData: this.props.data.youtuber[0].categories.filter(cat => cat.category === this.state.categoryName)[0].reviews})
    }

    goBack() {
        this.props.history.goBack();
    }

    handleSort = clickedColumn => () => {
        const {column, tableData, direction} = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                tableData: _.sortBy(tableData,  [clickedColumn]),
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

        console.log(this.state.tableData)
        return (<ReviewTable data={this.state.tableData} category={this.state.categoryName} goBack={this.goBack}
                             sort={this.handleSort} column={this.state.column} direction={this.state.direction} name={this.props.match.params.name}/>)
    }
}

const queryOptions = {
    options: props => ({
        variables: {
            name: props.match.params.name
        },
    }),
};

ReviewView = graphql(query, queryOptions)(ReviewView);
export default ReviewView;
