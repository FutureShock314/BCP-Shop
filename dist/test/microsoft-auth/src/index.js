import { OAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const provider = new OAuthProvider('microsoft.com');
const auth = getAuth();
signInWithPopup