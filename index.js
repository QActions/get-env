const core = require('@actions/core');
const github = require('@actions/github');

const productionRegex = new RegExp('refs\/heads(\/v\d.*)?\/(master|main)')
const stagingRegex = new RegExp('refs\/heads(\/v\d.*)?\/(staging|stage)')
const releaseRegex = new RegExp('refs\/heads(\/v\d.*)?\/(release)')

try {
  const ref = core.getInput('ref');
  console.log(`get-env started with ${ref} as input`)
  let environmentName;
  if (productionRegex.test(environmentName)) {
    core.setOutput("environmentname", 'production');
    console.log('Returned production environment');
  }
  else if (stagingRegex.test(environmentName)) {
    core.setOutput("environmentname", 'staging');
    console.log('Returned staging environment');
  }
  else if (releaseRegex.test(environmentName)) {
    core.setOutput("environmentname", 'release');
    console.log('Returned release environment');
  } else {
    core.setOutput("environmentname", 'development');
    console.log('Returned development environment');
  }
  const time = (new Date()).toTimeString();
  core.setOutput("environmentname", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}