import React from 'React';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';

import Login from '../../src/client/components/Login';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate
}));

//Unit testing for Login component
describe('Login', () => {
  test('It renders the Login component', () => {
    render(<Login/>);
  })

  test('It should have buttons for login, sign up, and continue as guest', async () => {
    render(<Login />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(4);
    expect(buttons[1]).toHaveTextContent('Login');
    expect(buttons[2]).toHaveTextContent('Sign Up');
    expect(buttons[3]).toHaveTextContent('Continue As Guest');
  });

  test('It should have input boxes for username and password', () => {
    render(<Login />);
    expect(screen.findByLabelText('Username')).toBeInTheDocument;
    expect(screen.findByLabelText('Password')).toBeInTheDocument;
    expect(screen.findByLabelText('Hello')).not.toBeInTheDocument;
  });
})