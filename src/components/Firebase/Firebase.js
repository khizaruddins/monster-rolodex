import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyDzoI7JHtinu5GL7NnMUlQ1AbAPTcxElQs",
    authDomain: "monster-rolodex.firebaseapp.com",
    databaseURL: "https://monster-rolodex.firebaseio.com",
    projectId: "monster-rolodex",
    storageBucket: "monster-rolodex.appspot.com",
    messagingSenderId: "554221292251",
    appId: "1:554221292251:web:200bfa00ad63ef80149afe"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
export default Firebase;