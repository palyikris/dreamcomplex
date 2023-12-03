"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";

export default function AuthPage(props) {
  let router = useRouter();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordAgain, setPasswordAgain] = useState("");
  let [error, setError] = useState("");
  let { isLogin } = props;

  const handleAuth = (e, isLogin) => {
    e.preventDefault();
    if (isLogin) {
      try {
        signInWithEmailAndPassword(auth, email, password).then(() => {
          router.push("/reservations");
        });
      } catch (error) {
        setError(error.message);
      }
    } else {
      if (password !== passwordAgain) {
        setError("A jelszavak nem egyeznek!");
        return;
      }
      try {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
          router.push("/reservations");
        });
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (isLogin) {
    return (
      <form
        onSubmit={e => {
          handleAuth(e, true);
        }}
      >
        <h1>Bejelentkezés</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Jelszó"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Bejelentkezés</button>
        <p>
          {error}
        </p>
      </form>
    );
  }

  return (
    <form
      onSubmit={e => {
        handleAuth(e, false);
      }}
    >
      <h1>Regisztráció</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó újra"
        value={passwordAgain}
        onChange={event => setPasswordAgain(event.target.value)}
      />
      <button type="submit">Regisztráció</button>
      <p>
        {error}
      </p>
    </form>
  );
}
