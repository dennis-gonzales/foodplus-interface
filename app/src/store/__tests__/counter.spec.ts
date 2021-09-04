import { AnyAction, } from 'redux';
import reducer, { increment, decrement, incrementByAmount } from '../features/counterSlice';

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

type Person = {
  name: string;
  gender: "Female" | "Male" | "Others";
  age: number;
}

// type User = {
//   [key: string]: Person;
//   test: Person;
// }
// const users: User = {
//   p1,
//   p2,
// };

// console.log(users['p1']);
// console.log(users['p2']);


const p1: Person = {
  name: "Dennis",
  gender: "Male",
  age: 23
}

const p2: Person = {
  name: "Joy",
  gender: "Female",
  age: 22,
}

const newUsers: Record<string, Person> = {
  default: {
    name: "default",
    gender: "Others",
    age: 0,
  }
};

newUsers['p1'] = p1;
newUsers['p2'] = p2;

console.log(newUsers);