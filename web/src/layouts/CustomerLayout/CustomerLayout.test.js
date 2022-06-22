import { render } from '@redwoodjs/testing/web'

import CustomerLayout from './CustomerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CustomerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomerLayout />)
    }).not.toThrow()
  })
})
