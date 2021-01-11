import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import CategoryItem from './CategoryItem';

test('display correct title', () => {
  const onClick = jest.fn();
  const {getByTestId} = render(<CategoryItem click={onClick} title="Test" selected={false}/>);
  const item = getByTestId("category-item");
  fireEvent.click(item);
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(item).toHaveTextContent("Test");
});

test('multiple clicks work', () => {
  const onClick = jest.fn();
  const {getByTestId} = render(<CategoryItem click={onClick} title="Test" selected={false}/>);
  const item = getByTestId("category-item");
  for (let i = 0; i < 3; i++) {
    fireEvent.click(item);
  }
  expect(onClick).toHaveBeenCalledTimes(3);
});