import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



class ListItem extends Component {

  state = {
    checked: this.props.task.completed,
  };

  handleCheck = () => event => {
    this.setState((state) => {

      this.props.dispatch({
        type: 'UPDATE_TASK',
        payload: {
          checked: !state.checked,
          id: this.props.task.id,
        }
      });

      return {checked: !state.checked}
    });
  }

  handleDelete = () => event => {
    this.props.dispatch({
      type: 'DELETE_TASK',
      payload: {
        id: this.props.task.id,
      }
    });
  }

  render() {
    const { task } = this.props;
    return (
      <TableRow>
        <TableCell>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheck()}
          />
        </TableCell>
        <TableCell>
          {task.task}
        </TableCell>
        <TableCell>
          <IconButton
            color='secondary'
            onClick={this.handleDelete()}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

export default connect(mapStoreToProps)(ListItem);
