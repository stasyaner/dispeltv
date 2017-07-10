const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const firebaseConf = require('./firebaseConf');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
firebase.initializeApp(firebaseConf);

app.post('/', (req, res) => {
  firebase.database().ref(`users/${req.body.name}`).once('value').then(snapshot => {
    const user = snapshot.val();
    if(user) {
      console.log(user);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
