import reducer from '../index';
import { incrementCounter, decrementCounter } from '../../actions';

describe('reducers', () => {
  it('initializes', () => {
    const state = reducer({}, { type: 'any' });
    expect(state.counter).toEqual(0);
  });

  it('increments', () => {
    const initialState = { counter: 0 };
    const state = reducer(initialState, incrementCounter());
    expect(state.counter).toEqual(1);
  });

  it('decrements', () => {
    const initialState = { counter: 10 };
    const state = reducer(initialState, decrementCounter());
    expect(state.counter).toEqual(9);
  });
});
