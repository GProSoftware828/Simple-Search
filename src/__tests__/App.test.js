import App from '../App';
//import { render } from '@testing-library/react';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
//import 'jest-dom/extend-expect';
import reducer from '../store/reducer';

function renderWithRedux(component, {initialState, store = createStore(reducer, initialState)} = {}
) {
	return {
		...render(<Provider store={store}>{component}</Provider>)
	};
}

test('Should render App', async () => {
  renderWithRedux(<App/>)
})

test('Should find User component', async () => {
	const { getByTestId } = renderWithRedux(<App/>);
	expect(getByTestId('users')).not.toBeNull()
})

/*describe('Should render App component', () => {
	test('Renders App', () => {
		render(<App/>);
	})
});*/
/*
afterEach(cleanup)

function renderWithRedux(component, {initialState, store = createStore(reducer, initialState)} = {}
) {
	return {
		...render(<Provider store={store}>{component}</Provider>)
	};
}

if("Should render App with redux", () => {
	const { getByTestId } = rendersWithRedux(<App/>);
	expect(getByTestId('users')).not.toBeNull()
	
})



// __tests__/fetch.test.js
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fetch from '../fetch'

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})*/