import { screen, render } from "@testing-library/react";
import Form from '../form/index';

jest.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: jest.fn()
    })
  }
})

describe('Form component', () => {
  beforeEach(() => {
    render(<Form/>);
  });

  it('should mount form component', () => {
    const formElement = screen.getByTestId('form-element');
    expect(formElement).toBeTruthy()
  });
})
