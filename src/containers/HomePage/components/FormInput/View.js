import React from 'react';
import FormLayout from './Layout';
import { Link } from 'react-router-dom';


class FormView extends React.Component {
    state = {
        task: '',
        items: [],
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        task: '',
        items: [...this.state.items, this.state.task]
      })
    };

    handleInputChange = (event) => this.setState({task: event.target.value});




    render () {
        return (
            <FormLayout
                {...this.props}
                {...this.state}
                onSubmit={this.handleSubmit}
                onInputChange={this.handleInputChange}
            />
        );
    }
}

export default FormView;
