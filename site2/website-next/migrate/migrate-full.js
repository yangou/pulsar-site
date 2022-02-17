const migrateVersion = require("./migrate-version");

let versions = require("../versions-full.json");
versions = ["next"].concat(versions);

const migrate = (vs) => {
  (vs || versions).forEach((v) => {
    migrateVersion(v);
  });
};

module.exports = migrate;

//Test
if (typeof require !== "undefined" && require.main === module) {
  migrate([
    "next",
    "2.9.1",
    "2.9.0",
    "2.8.2",
    "2.8.1",
    "2.8.0",
    "2.7.3",
    "2.7.2",
    "2.7.1",
    "2.7.0",
    "2.6.4",
    "2.6.3",
    "2.6.2",
    "2.6.1",
    "2.6.0",
    "2.5.2",
    "2.5.1",
    "2.5.0",
    "2.4.2",
    "2.4.1",
    "2.4.0",
    "2.3.2",
    "2.3.1",
    "2.3.0",
    "2.2.1",
    "2.2.0",
  ]);
}
