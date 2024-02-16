
import { render, screen, waitFor } from '@testing-library/react';

import Categories from './Categories'; // Adjust the import path according to your file structure

import { BrowserRouter as Router } from 'react-router-dom';

import fetchMock from 'jest-fetch-mockfetch-mock';

beforeEach(() => {

 fetch.resetMocks();

});

const Wrapper = ({ children }) => (
 <Router>

   {children}

 </Router>

);

// Test case to check the component with a dummy API response

test('handles dummy API response correctly', async () => {

 // Assume the dummy API returns a specific category list

 const dummyApiResponse = ["smartphones","laptops","fragrances","skincare","groceries",
 "home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts",
 "mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery",
 "sunglasses","automotive","motorcycle","lighting"];

 fetch.mockResponseOnce(JSON.stringify(dummyApiResponse));

 render(<Categories />, { wrapper: Wrapper });

 // Wait for the component to process the fetch response

 await waitFor(() => {

   // Check if the component correctly renders items from the dummy API response

   dummyApiResponse.forEach((category) => {

     expect(screen.getByText(new RegExp(category, 'i'))).toBeInTheDocument();

   });

 });

});