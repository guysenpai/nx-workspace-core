import { isNull } from './ts-library';

describe('tsLibrary', () => {
  it('should work', () => {
    expect(isNull(null)).toEqual(true);
  });
});
