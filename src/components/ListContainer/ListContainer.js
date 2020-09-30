import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ListItem from '../ListItem/ListItem';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  table: {
    maxWidth: '90%',
    margin: '5%'
  }
})

class ListContainer extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_TASK' });
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <AddTaskForm />
        {/* {JSON.stringify(this.props.store)} */}

        <TableContainer
        component={Paper}
        className={classes.table}
        >
          <Table aria-label="to do list">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Task</TableCell>
                <TableCell />
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
      </Grid>
    );
  }
}

export default withStyles(styles)(connect(mapStoreToProps)(ListContainer));
