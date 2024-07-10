import { useState } from "react";
import styles from "./page.module.css"
import { set } from "date-fns";
import Loader from './../loader/page';
import { makeId } from "@/lib/random";
import { SendInvitation } from "@/lib/sendinv";

export default function ReviewSenderComponent() {

  const [email, setEmail] = useState("")
  const [type, setType] = useState("0")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleReviewSendSubmit = async(e) => {
    e.preventDefault();
    if (type === "0") {
      alert("Válassz apartman típust!")
      return;
    }
    if (email === "" || name === "") {
      alert("Tölts ki minden mezőt!")
      return;
    }
    setIsLoading(true)
    HandleInvSend(type, email, name)
    setEmail("")
    setType("0")
    setName("")
    setIsLoading(false)
  }

  const HandleInvSend = (type, email, name) => {
    setIsLoading(true)
    console.log(type, email)
    let token = makeId(20); // prompt: making an id for the new reservation in the database
    token = token.replace(/\s+/g, "");
    let confirm = window.confirm("Biztosan elküldöd az emailt?");
    if (confirm) {
      SendInvitation(email, token, name, type).then(() => {
        setIsLoading(false);
      });
    }
    else {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <form className={styles.form}>
        <Loader></Loader>
      </form>
    )
  }

  return (
    <form onSubmit={handleReviewSendSubmit} className={styles.form}>
      <input type="email" placeholder="Milyen emailre küldenél értékelő emailt?" onChange={(e) => { setEmail(e.target.value) }} value={email} />
      <input type="text" placeholder="Milyen névre küldenél értékelő emailt?" onChange={(e) => { setName(e.target.value) }} value={name} />
      <select name="type" id="type" onChange={(e) => {setType(e.target.value)}} value={type}>
        <option value="0">Válassz apartman típust!</option>
        <option value="apartman">Dream apartman</option>
        <option value="topart">Dream tópart</option>
      </select>
      <button type="submit">Küldés</button>
    </form>
  )
}