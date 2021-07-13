const express = require("express");
const PushNotifications = require('@pusher/push-notifications-server');

const PORT = 3000;

const app = express();
app.use('/', function (req, res) {
console.log("Welcome")
});

let beamsClient = new PushNotifications({
    instanceId: '649c8dbb-72e6-4920-a6aa-c5141f927bdf',
    secretKey: '732FCD9368FC889CD327FB0A86F5C24D922EACF6F3FE234A67D38B902904072F'
  });

beamsClient.publishToInterests(['hello'], {
    web: {
        notification: {
          title: "Hello",
          body: "Hello, world!",
        },
      },
    })
    .then((publishResponse) => {
      console.log("Just published:", publishResponse.publishId);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

app.get("/", function(req, res){
    console.log("ready")
});

app.listen(PORT, ()=> console.log("ready"));