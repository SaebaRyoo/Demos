import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { UserEvent } from '.';


describe('test',() => {
  it(`event test`, () => {
    const clickEvent = jest.fn();
    render(<UserEvent onClick={clickEvent} />)

    fireEvent.click(screen.getByRole('button'))
    expect(clickEvent).toBeCalled()
    expect(clickEvent).toBeCalledTimes(1)
  })
})
