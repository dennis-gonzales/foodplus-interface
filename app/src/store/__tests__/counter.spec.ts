import { AnyAction } from '@reduxjs/toolkit';
import reducer, { increment, decrement, incrementByAmount } from '../slices/counterSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual({ value: 0 });
});

test('should handle increment', () => {
  expect(reducer({ value: 0 }, increment())).toEqual({ value: 1 });
});

test('should handle decrement', () => {
  expect(reducer({ value: 0 }, decrement())).toEqual({ value: -1 });
});

test('should handle incrementByAmount', () => {
  expect(reducer({ value: 0 }, incrementByAmount(5))).toEqual({ value: 5 });
});