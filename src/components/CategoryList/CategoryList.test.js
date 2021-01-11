import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import CategoryList from './CategoryList';

test('render empty categories', () => {
  const categories = [];
  const {getByTestId} = render(<CategoryList categories={categories} category="" />);
  const list = getByTestId("category-list");
  expect(list.childElementCount).toBe(3);
});

test('render multiple categories', () => {
  const categories = ["test1", "test2"];
  const {getByTestId} = render(<CategoryList categories={categories} category="" />);
  const list = getByTestId("category-list");
  expect(list.childElementCount).toBe(5);
  for (let i = 0; i < categories.length; i++) {
    expect(list.textContent).toContain(categories[i]);
  }
});