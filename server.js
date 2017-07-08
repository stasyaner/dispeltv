const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const config = {
  apiKey: 'AIzaSyAKC_nPLZpAxgStV6z1yZ6i4XU0FleQhiw',
  authDomain: 'dispeltv.firebaseapp.com',
  databaseURL: 'https://dispeltv.firebaseio.com',
  projectId: 'dispeltv',
  storageBucket: 'dispeltv.appspot.com',
  messagingSenderId: '763890867563'
};
firebase.initializeApp(config);

app.post('/', (req, res) => {
  firebase.database().ref(`users/${req.body.name}`).on('value', snapshot => {
    const user = snapshot.val();
    if(user) {
      console.log(user);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
  /*.catch(error => {
    console.log(error);
  });*/
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
