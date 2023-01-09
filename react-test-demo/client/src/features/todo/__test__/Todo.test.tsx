import { screen, act } from '@testing-library/react';
import React from 'react';
import Todo from '../Todo'
import classes from '../TODO.module.css'
import {renderWithProviders} from '../../../test/testUils'
import { setInputValue } from '../Todo.slice'
import { setupServer } from 'msw/node'
import { todo } from '../../../__mocks__/api/todoMock';

const server = setupServer(...todo)

// 在所有测试开始之前启用 API mock
beforeAll(() => server.listen())

// 在每个测试之后关闭 API mock
afterEach(() => server.resetHandlers())

// 所有测试结束时关闭 API mock
afterAll(() => server.close())

describe('<Todo/> ', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  })
  it(`it should render default value of preloadstate`, async () => {
    const preloadState = {
      todo: {
        inputValue: 'test',
        data: [
          {
              id: '1',
              name: 'hello',
              done: false,
          }
        ]
      }
    };

    renderWithProviders(<Todo/>, {preloadedState: preloadState})
    const testDom = await screen.findByRole("checkbox", {name: 'todo-checkbox-0'})
    expect(testDom).not.toBeChecked()
  })

  it(`it should render mock data`, async () => {

    const { user } = renderWithProviders(<Todo/>)
    expect(await screen.findByText('To learn node')).toBeInTheDocument()

    const input = await screen.findByRole('textbox', {name: 'create-todo'});
    await user.type(input, 'learning react test')
    expect(input).toHaveValue('learning react test')
    expect(input).not.toHaveValue('0')
    expect(input).not.toHaveValue('1')

    // mock user operation
    input.focus();
    await user.keyboard('{enter/}')
    const test = await screen.findByText('learning react test')
    expect(test).toBeInTheDocument()

  })


})
