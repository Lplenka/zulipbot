"use strict"; // catch errors easier

const travisBuildStatus = require("./pullRequests/travisBuildStatus.js"); // Travis build status for pull request updated

module.exports = exports = function(payload) {
  if (!payload.pull_request) return;
  const state = payload.state;
  const repoOwner = payload.repository.owner_name;
  const repoName = payload.repository.name;
  const pullRequestNumber = payload.pull_request_number.toString();
  const buildURL = payload.build_url;
  travisBuildStatus(state, repoOwner, repoName, pullRequestNumber, buildURL);
};
