import formatMoney from '../lib/formatMoney';

describe('The formatMoney function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('NT$1');
    expect(formatMoney(10)).toEqual('NT$10');
    expect(formatMoney(1234)).toEqual('NT$1,234');
    expect(formatMoney(0.4)).toEqual('NT$0.4');
  });
});
