import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export default function RegistraUsuario({email, senha}) {
  return createUserWithEmailAndPassword(auth, email, senha);
}
