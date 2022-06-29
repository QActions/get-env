import { getEnvironmentFromRef } from 'main';

describe('getEnvironmentFromRef', () => {
  it('Returns undefined when receiving number', () => {
    const result = getEnvironmentFromRef(0 as any);
    expect(result).toBeUndefined();
  });

  it('Returns undefined when receiving undefined', () => {
    const result = getEnvironmentFromRef(undefined as any);
    expect(result).toBeUndefined();
  });

  it('Returns undefined when receiving null', () => {
    const result = getEnvironmentFromRef(null as any);
    expect(result).toBeUndefined();
  });

  it('Returns development when receiving development ref', () => {
    const result = getEnvironmentFromRef('refs/heads/dev');
    const result2 = getEnvironmentFromRef('refs/heads/development');
    expect(result).toBe('development');
    expect(result2).toBe('development');
  });

  it('Returns production when receiving master ref', () => {
    const result = getEnvironmentFromRef('refs/heads/master');
    const result2 = getEnvironmentFromRef('refs/heads/main');
    expect(result).toBe('production');
    expect(result2).toBe('production');
  });

  it('Returns staging when receiving staging ref', () => {
    const result = getEnvironmentFromRef('refs/heads/stage');
    const result2 = getEnvironmentFromRef('refs/heads/staging');
    expect(result).toBe('staging');
    expect(result2).toBe('staging');
  });

  it('Returns release when receiving release ref', () => {
    const result = getEnvironmentFromRef('refs/heads/release');
    expect(result).toBe('release');
  });
});
