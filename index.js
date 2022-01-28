const core = require('@actions/core');

const productionRegex = /refs\/heads(\/v\d.*)?\/(master|main)/
const stagingRegex = /refs\/heads(\/v\d.*)?\/(staging|stage)/
const releaseRegex = /refs\/heads(\/v\d.*)?\/(release)/

try {
  const ref = core.getInput('ref');
  console.log(`get-env started with ${ref} as input`)
  let environmentName;
  if (productionRegex.test(ref)) {
    environmentName = 'production';
    console.log('Returned production environment');
  } else if (stagingRegex.test(ref)) {
    environmentName = 'staging';
    console.log('Returned staging environment');
  } else if (releaseRegex.test(ref)) {
    environmentName = 'release';
    console.log('Returned release environment');
  } else {
    environmentName = 'development';
    console.log('Returned development environment');
  }
  core.setOutput('environmentname', environmentName);
} catch (error) {
  core.setFailed(error.message);
}