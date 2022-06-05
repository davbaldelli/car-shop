import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
import {getMessaging, getToken, onMessage} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging.js'


const firebaseConfig = {
    apiKey: "AIzaSyBd9xO925nzOMTL0C6dH9RWgjPLg-zO5kg",
    authDomain: "prog-tw.firebaseapp.com",
    projectId: "prog-tw",
    storageBucket: "prog-tw.appspot.com",
    messagingSenderId: "452705460321",
    appId: "1:452705460321:web:a1ce7fba6eb3cb39050a20"

};


const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

getToken(messaging, {vapidKey: "BBldfwnUY4FU22KqNZd_Hfa3Q0kkR79_ir1QctW_wt6XMgkqpLuxtZqubNTi2BkwXf6decv5aZd5uIH-by3tOU4"})
    .then((token) => {
        console.log(token)
    })
    .catch((err) => {
        console.log(err)
    })

onMessage(messaging, (payload) => {
    //TODO Popup Message
    console.log('Message received. ', payload);
});
