import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

function initializeAuthentication(){
 initializeApp(firebaseConfig);
}

export default initializeAuthentication;