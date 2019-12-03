import { hello } from '../src/helloWord'
import { expect } from 'chai'
import 'mocha'

describe('Hello Function', () => {
  it('should return hello', () => {
    const result = hello()
    expect(result).to.equal('hello')
  })
})