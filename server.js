const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const firebaseConf = require('./firebaseConf');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
firebase.initializeApp(firebaseConf);

const setUserOnlineTimestampCallback = (req, res) => {
  const userRef = firebase.database().ref(`users/${req.body.name}`);
  userRef.once('value').then((snapshot) => {
    const user = snapshot.val();
    if (user) {
      const userStatusAndTimestampUpdate = {
        status: 'Online',
        lastActiveTimestamp: firebase.database.ServerValue.TIMESTAMP,
      };
      userRef.update(userStatusAndTimestampUpdate);
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
      throw new Error('User is not found');
    }
  });
};

const setUserOfflineCallback = (req) => {
  const userRef = firebase.database().ref(`users/${req.body.name}`);
  userRef.once('value').then((snapshot) => {
    const user = snapshot.val();
    if (user) {
      const userStatusUpdate = {
        status: 'Offline',
      };
      userRef.update(userStatusUpdate);
    } else {
      throw new Error('user is not found');
    }
  });
};

app.post('/publish', setUserOnlineTimestampCallback);
app.post('/update', setUserOnlineTimestampCallback);
app.post('/publish_done', setUserOfflineCallback);

app.listen(3000);
