import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Button,
  Grid,
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
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="baseline"
        component='form'
        autoComplete="off"
        onSubmit={this.handleSubmit()}
      >
        <TextField
          item
          component={Grid}
          label="New Task"
          value={this.state.text}
          onChange={this.handleChange('text')}
          variant="filled"
        />
        <Button
          item
          component={Grid}
          variant="contained"
          color='primary'
          onClick={this.handleSubmit()}
        >
          Submit
        </Button>
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(AddTaskForm);
