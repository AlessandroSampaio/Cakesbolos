import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export function RegistraUsuario({email, senha}) {
  return createUserWithEmailAndPassword(auth, email, senha);
}

export function AutorizaUsuario({email, senha}) {
  return signInWithEmailAndPassword(auth, email, senha);
}
