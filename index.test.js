const getRemainder = require('./index')
const assert = require('assert')

describe("Units testing", () => {
  it("Null input", () => {
    assert.equal(getRemainder(null), 'Invalid input')
  })

  it("Empty input", () => {
    assert.equal(getRemainder(), 'Invalid input')
    assert.equal(getRemainder(''), 'Invalid input')
  })

  it("Non-binary input", () => {
    assert.equal(getRemainder('12'),'Invalid input')
  })

  it("Remainder 0", () => {
    assert.equal(getRemainder('110'), 0)
  })

  it("Remainder 1", () => {
    assert.equal(getRemainder('1001001001111011110'), 1)
  })

  it("Remainder 2", () => {
    assert.equal(getRemainder('101110110111'), 2)
  })
})