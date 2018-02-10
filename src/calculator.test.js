import { expect } from 'chai';

describe('Our basic calculator', () => {
  it('should eval 1 + 2 equal 3', () => {
    expect(eval('1+2')).to.equal(3);
  })
})
