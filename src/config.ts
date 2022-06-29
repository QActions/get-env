export const environments: {
  [key: string]: {matchingRegex: RegExp;};
} = {
  production: {
    matchingRegex: /^refs\/heads(\/v\d.*)?\/(master|main)/,
  },
  staging: {
    matchingRegex: /^refs\/heads(\/v\d.*)?\/(staging|stage)/,
  },
  release: {
    matchingRegex: /^refs\/heads(\/v\d.*)?\/(release)/,
  },
  development: {
    matchingRegex: /^refs\/heads(\/v\d.*)?\/(development|dev)/,
  },
};

export const defaultEnvironment = 'development';
