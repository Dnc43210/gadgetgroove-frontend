import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

fetchMock.mock('https://dummyjson.com/products/categories', 200);
const res = await fetch('https://dummyjson.com/products/categories');
assert(res.ok);
fetchMock.restore();