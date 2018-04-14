import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//CSS
import {
    Form,
    Input,
    Button,
    Container
} from 'semantic-ui-react';

const query = gql`
  mutation CreateView($name: String!, $email: String!, $age: Int!, $message: String!) {
    addCustomer (name: $name, email: $email, age: $age, message: $message){
        id
        name
        message
  }
}`;

class CreateView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contact: {
                name: '',
                email: '',
                age: 0,
                message: ''
                },
            saving: false,
            error: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
}

    onChange(event) {
        const field = event.target.name;
        let contact = Object.assign({}, this.state.contact);
        contact[field] = event.target.value;
        contact['type'] = this.state.type;
        return this.setState({
            contact: contact
        });
    }

    onConfirm(event) {
        event.preventDefault();
        this.setState({
            saving: true
        })
        this.props
            .mutate({ variables: { name: this.state.contact.name, email: this.state.contact.email, age: this.state.contact.age, message: this.state.contact.message } })
            .then(res => {
                console.log(res);
                window.location.replace(`/`)
                this.setState({
                    saving: false
                })
            })
            .catch (err => {
                this.setState({
                    saving: false,
                    error: err.graphQLErrors.map(x => x.message)
                })
            })
    }

    render(){
        return <Container>{this.state.error !== '' ? this.state.error : ''}
        <Form size='large'>
            <Form.Field name='name' control={Input} label="Name" placeholder='Name' value={this.state.name} onChange={this.onChange}/>
            <Form.Field name='email' control={Input} label="Email" placeholder='doofus@gmail.com' value={this.state.email} onChange={this.onChange}/>
            <Form.Field name='age' control={Input} label="Age" placeholder='Age' value={this.state.age} onChange={this.onChange}/>
            <Form.Field name='message' control={Input} label="Message" placeholder='Write a message' value={this.state.message} onChange={this.onChange}/>
            <Button positive inverted fluid disabled={this.state.saving} content={this.state.saving
                ? 'Submitting...'
                : 'Submit'} onClick={this.onConfirm} />
        </Form></Container>
    }
}

const queryOptions = {
    options: props => ({
        variables: {
            id: props.match.params.id,
        },
    }),
};

CreateView = graphql(query, queryOptions)(CreateView);
export default CreateView;
