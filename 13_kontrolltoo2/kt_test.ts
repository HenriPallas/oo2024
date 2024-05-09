import {Solver} from "../kt";

  let solver:Solver;

beforeEach(() => {
  solver=new Solver();
});

test('Basic quadratic', () => {
  expect(solver.solveQuadratic(1,-3,2)).toEqual({ x1: 2, x2: 1 });
});

test('x1=x2 quadratic', () => {
  expect(solver.solveQuadratic(1,-2,1)).toEqual({ x1: 1, x2: 1 });
});

test('Solutionless quadratic', () => {
  expect(solver.solveQuadratic(1,2,3)).toEqual({ x1: null, x2: null });
});

test('Additional quadratic 1', () => {
  expect(solver.solveQuadratic(1,-8,15)).toEqual({ x1: 5, x2: 3 });
});

test('Additional quadratic 2', () => {
  expect(solver.solveQuadratic(1,-4,4)).toEqual({ x1: 2, x2: 2 });
});

test('Additional quadratic 3', () => {
  expect(solver.solveQuadratic(1,-4,5)).toEqual({ x1: null, x2: null });
});