"use strict"; // catch errors easier

const areaLabels = new Map([
  ["area: analytics", "server-analytics"],
  ["area: api", "server-api"],
  ["area: authentication", "server-authentication"],
  ["area: bots", "server-bots"],
  ["area: browser-support", "server-browser-support"],
  ["area: compose", "server-compose"],
  ["area: db cleanup", "server-misc"],
  ["area: dependencies", "server-dependencies"],
  ["area: documentation (api and integrations)", "server-api"],
  ["area: documentation (developer)", "server-development"],
  ["area: documentation (production)", "server-production"],
  ["area: documentation (user)", "server-user-docs"],
  ["area: emoji", "server-emoji"],
  ["area: export", "server-misc"],
  ["area: hotkeys", "server-misc"],
  ["area: in", "server-in"],
  ["area: integrations", "server-integrations"],
  ["area: left-sidebar", "server-sidebars"],
  ["area: markdown", "server-markdown"],
  ["area: message-editing", "server-message-view"],
  ["area: message view", "server-message-view"],
  ["area: misc", "server-misc"],
  ["area: notifications", "server-notifications"],
  ["area: onboarding", "server-onboarding"],
  ["area: production installer", "server-production"],
  ["area: production", "server-production"],
  ["area: provision", "server-development"],
  ["area: real-time sync", "server-misc"],
  ["area: refactoring", "server-refactoring"],
  ["area: right-sidebar", "server-sidebars"],
  ["area: search", "server-search"],
  ["area: settings (admin/org)", "server-settings"],
  ["area: settings UI", "server-settings"],
  ["area: settings (user)", "server-settings"],
  ["area: stream settings", "server-streams"],
  ["area: testing-coverage", "server-testing"],
  ["area: testing-infrastructure", "server-testing"],
  ["area: tooling", "server-tooling"],
  ["area: topics", "server-misc"],
  ["area: uploads", "server-misc"]
]);

module.exports = areaLabels;
