import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
export const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MESSUREMENT_ID

  apiKey: "AIzaSyBsRLDwHCDVm0DaB26ArD3oLNJf3qULOiw",
  authDomain: "sorm-tech.firebaseapp.com",
  projectId: "sorm-tech",
  storageBucket: "sorm-tech.appspot.com",
  messagingSenderId: "388191683969",
  appId: "1:388191683969:web:590a779cc91b89f5541480",
  measurementId: "G-2DGX4X3YPB"
};

var app = null
try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
} catch (e) {
  console.log(e)
}

// export const auth = getAuth();

// export var analytics = undefined;
// if (app?.name && typeof window !== 'undefined') {
//   analytics = getAnalytics(app)
// }
