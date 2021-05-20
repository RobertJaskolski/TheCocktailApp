export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || '',
  authDomain: 'the-cocktail-app.firebaseapp.com',
  projectId: 'the-cocktail-app',
  storageBucket: 'the-cocktail-app.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_APP_ID || '',
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || '',
};
