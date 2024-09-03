import { YOLOBANNER } from './banner';
import { test, expect } from 'vitest';

test('YOLOBANNER', () => {
  expect(YOLOBANNER('Hello World!')).toMatchSnapshot();
});
