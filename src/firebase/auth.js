import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export default function RegistraUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
