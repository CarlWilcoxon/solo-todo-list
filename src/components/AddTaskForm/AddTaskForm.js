import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Button,
  TextField,
} from '@material-ui/core';

class AddTaskForm extends Component {
  state = {
    text: '',
  };

  handleChange = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleSubmit = () => (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'ADD_TASK',
      payload: this.state,
    });
  }


  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit()}>
        <TextField
          label="New Task"
          value={this.state.text}
          onChange={this.handleChange('text')}
          variant="filled"
        />
        <Button
          variant="contained"
          color='primary'
          onClick={this.handleSubmit()}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(AddTaskForm);
