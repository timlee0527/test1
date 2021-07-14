import * as firebase from 'firebase';
import 'firebase/firbasetore';
import config from '../../firebase.json';

const app = firebase.initializeApp(config);

const Auth = app.auth();
