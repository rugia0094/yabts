import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('demo', () => {
  expect(true).toBe(true)
})

test('Renders the main page', async () => {
  render(<App />)

  expect(screen.getByRole('button').textContent).toBe('count is 0')
  await userEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('button').textContent).toBe('count is 1')
  await userEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('button').textContent).toBe('count is 2')
  await userEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('button').textContent).toBe('count is 3')
})
