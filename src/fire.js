import { default as fb } from 'firebase';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAHkV0e-oNgainCgEwd3W23_6Dh4LFgXGI',
	authDomain: 'devicttalk.firebaseapp.com',
	databaseURL: 'https://devicttalk.firebaseio.com',
	projectId: 'devicttalk',
	storageBucket: 'devicttalk.appspot.com',
	messagingSenderId: '998184814030',
};

export const firebase = fb.initializeApp(config);
export const firestore = fb.firestore();
