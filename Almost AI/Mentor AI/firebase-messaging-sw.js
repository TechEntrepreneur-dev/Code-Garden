// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC6pzBwlechsYaSMr9JHsupez_ANKJ9GKw",
  authDomain: "ai-self-improvement-mentor.firebaseapp.com",
  projectId: "ai-self-improvement-mentor",
  storageBucket: "ai-self-improvement-mentor.appspot.com",
  messagingSenderId: "997450829221",
  appId: "1:997450829221:web:72df99f1f08b5ccf8cac4c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, { body });
});