import core from '@actions/core';
import github from '@actions/github';
import { defaultEnvironment, environments } from 'config';

const getEnvironmentFromRef = (ref: string) => {
  for (const deployment of Object.keys(environments)) {
    if (environments[deployment].matchingRegex.test(ref)) {
      return deployment;
    }
  }
  return undefined;
};

const runAction = () => {
  const environment = getEnvironmentFromRef(github.context.ref) ?? defaultEnvironment;

  core.setOutput('running-environment', environment);
  core.exportVariable('ENVIRONMENT', environment);
  core.info(`The current workflow is running on ${environment} deployment environment`);
};

runAction();
