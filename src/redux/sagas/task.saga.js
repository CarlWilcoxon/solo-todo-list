import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_TASK" actions
function* createTask(action) {
  try {
    yield axios.post('/api/task', action.payload);
    yield put({ type: 'FETCH_TASK' });
  } catch (error) {
    console.log('Task post request failed', error);
  }
}

// worker Saga: will be fired on "FETCH_TASK" actions
function* fetchTask() {
  try {
    const response = yield axios.get('/api/task');
    yield put({ type: 'SET_TASK', payload: response.data });
  } catch (error) {
    console.log('Task get request failed', error);
  }
}

// worker Saga: will be fired on "DELETE_TASK" actions
function* removeTask(action) {
  try {
    yield axios.delete(`/api/task/${action.payload.id}`);
    yield put({ type: 'FETCH_TASK' });
  } catch (error) {
    console.log('Task delete request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_TASK" actions
function* updateTask(action) {
  try {
    yield axios.put(`/api/task/${action.payload.id}`);
    yield put({ type: 'FETCH_TASK' });
  } catch (error) {
    console.log('Task delete request failed', error);
  }
}

function* taskSaga() {
  yield takeLatest('ADD_TASK', createTask);
  yield takeLatest('FETCH_TASK', fetchTask);
  yield takeLatest('DELETE_TASK', removeTask);
  yield takeLatest('UPDATE_TASK', updateTask);
}

export default taskSaga;
