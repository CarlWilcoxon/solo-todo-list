import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ListItem from '../ListItem/ListItem';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

class ListContainer extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_TASK' });
  }

  render() {
    return (
      <>
                    {JSON.stringify(this.props.store)}

      <TableContainer component={Paper}>
        <Table aria-label="to do list">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.store.task !== undefined ?
            this.props.store.task.map( (task, index) =>
              <ListItem task={task} key={index} />
            ):null}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    );
  }
}

export default connect(mapStoreToProps)(ListContainer);
