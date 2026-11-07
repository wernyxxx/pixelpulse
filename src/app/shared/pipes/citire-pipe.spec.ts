import { CitirePipe } from './citire-pipe';

describe('CitirePipe', () => {
  it('formatează numărul de minute', () => {
    const pipe = new CitirePipe();
    expect(pipe.transform(5)).toBe('5 min citire');
  });
});
