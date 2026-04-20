import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuration will be populated by the set_up_firebase tool
let firebaseConfig: any = {};

try {
  // We use a dynamic import or require-like approach to handle missing file gracefully if needed
  // But since we created a placeholder, we can try to require it if in cjs or just handle it.
  // For Vite/TS, a top-level import is safest if the file exists.
} catch (e) {
  console.warn('Firebase config error');
}

// @ts-ignore
import config from '../../firebase-applet-config.json';
firebaseConfig = config;

const app = getApps().length > 0 
  ? getApp() 
  : (firebaseConfig && Object.keys(firebaseConfig).length > 5 
      ? initializeApp(firebaseConfig) 
      : null);

export const auth = app ? getAuth(app) : null;
export const db = (app && firebaseConfig?.firestoreDatabaseId) 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId) 
  : (app ? getFirestore(app) : null);

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  if (!auth) {
    alert('Firebase is not configured yet. Please complete the setup.');
    return;
  }
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google', error);
    throw error;
  }
};
