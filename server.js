const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const firebaseConf = require('./firebaseConf');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
firebase.initializeApp(firebaseConf);

app.post('/', (req, res) => {
  const userRef = firebase.database().ref(`users/${req.body.name}`);
  userRef.once('value').then(snapshot => {
    const user = snapshot.val();
    if(user) {
      const userAvailabilityAndTimestampUpdate = {
        availability: 'Online',
        lastAvailableTimestamp: new Date().getTime(),
      };
      userRef.update(userAvailabilityAndTimestampUpdate);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
