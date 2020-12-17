var faunadb = require("faunadb");
q = faunadb.query;

require("dotenv").config();

(async () => {
  var adminClient = new faunadb.Client({
    secret: process.env.YOUR_FAUNADB_ADMIN_SECRET,
  });

  try {
    var result = await adminClient.query(
      q.CreateCollection({ name: "message" })
    );

    console.log("Container Created: " + result.name);
  } catch (error) {
    console.log(error);
  }
})();
