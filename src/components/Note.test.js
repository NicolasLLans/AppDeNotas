import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import { Note } from './Note.js'

test('renders content', () => {
  const note = {
    content: 'This is a test',
    importante: true
  }

  const component = render(<Note note={note} />)

  // component.getByText('This is a test')
  // component.getByText('make note important')
  // expect(component.container).toHaveTextContent(note.content)
  component.debug()
})

test('clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test',
    importante: true
  }

  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler}/>)

  const button = component.getByText('make note important')
  fireEvent.click(button)

  expect(mockHandler).toHaveBeenCalledTimes(1)
})