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
    // Error: Uncaught [TypeError: window.matchMedia is not a function]
    // The above error occurred in the <List> component:
    //       at List (react-test-demo/client/node_modules/antd/lib/list/index.js:36:7)
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

  it(`it should correctly with default value `, async () => {
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

    const {container} = renderWithProviders(<Todo/>, {preloadedState: preloadState})
    expect(container).toMatchSnapshot()
  })

  it(`it should fetch mock data and render it correctly`, async () => {

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

  it(`it should change the status of todo`, async () => {
    const { user } = renderWithProviders(<Todo/>)
    const testDom = await screen.findByRole("checkbox", {name: 'todo-checkbox-0'})
    expect(testDom).not.toBeChecked()
    testDom.focus();
    await user.click(testDom)
    expect(testDom).toBeChecked()
  })

  it(`Todo should be deleted when button was clicked`, async () => {
    const { user } = renderWithProviders(<Todo/>)
    expect(await screen.findByText('To learn node')).toBeInTheDocument()
    const delBtn0 = await screen.findByRole('button', {name: 'todo-btn-0'})
    await user.click(delBtn0)
    expect(await screen.findByText('No data')).toBeInTheDocument()
  })
})
