import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import ProductListPage from './ProductListPage';

test('render empty products', () => {
  const products = [
  ];
  const onClick = jest.fn();
  const {getByTestId} = render(<ProductListPage products={products} click={onClick} category=""/>);
  const list = getByTestId("product-list-page");
  expect(list.childElementCount).toBe(2);
});

test('render multiple products', () => {
  const products = [
    {id: 1, name: "Ground Beef", category: "🥩 Meat", price: "5.00", quantity: "12", desc: "Ground beef in a plastic tube"},
    {id: 2, name: "Ground Pork", category: "🥩 Meat", price: "5.00", quantity: "12", desc: "Ground Pork in a plastic tube"}
  ];
  const onClick = jest.fn();
  const {getByTestId} = render(<ProductListPage products={products} click={onClick} category="All"/>);
  const list = getByTestId("product-list-page");
  for (let p of products) {
    expect(list.textContent).toContain(p.name);
  }
});