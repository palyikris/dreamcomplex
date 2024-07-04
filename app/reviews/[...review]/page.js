"use client"

import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./page.module.css"
import Loader from "@/components/loader/page";
import { AddNewReview } from "@/lib/firebase";


export default function ReviewsPage() {

  const [rating, setRating] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [review, setReview] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRateChange = (newRating) => {
    setRating(newRating)
  }

  const handleReviewSubmission = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (name === "" || email === "" || review === "" || rating === 0) {
      alert("Minden mezőt ki kell tölteni! (Csillagot is állítani kell!)")
      return
    }
    AddNewReview({ name, email, review, rating }).then(() => {
      alert("Vélemény sikeresen beküldve!")
      setIsLoading(false)
      setName("")
      setEmail("")
      setReview("")
      setRating(0)
    })
    
    
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.starsWrapper}>
          <h1>Vélemény beküldése...</h1>
          <div className={styles.sep}></div>
          <Loader main={true} />
        </div>
      </div>
      
    )
  }


  return (
    <div className={styles.container}>
      <div className={styles.starsWrapper}>
        <h1>Hogy érezted magad?</h1>
        <div className={styles.sep}></div>
        <form className={styles.stars} onSubmit={handleReviewSubmission}>
          <div className={styles.data}>
            <ReactStars
              count={5}
              onChange={handleRateChange}
              isHalf={false}
              size={36}
              activeColor="#daa06d"
              color="rgba(218, 160, 109, 0.6)"
            ></ReactStars>
          </div>
          <div className={styles.data}>
            <label htmlFor="name">Név</label>
            <input type="text" id="name" required value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Pl.: Példa János"/>
          </div>
          <div className={styles.data}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Pl.: peldajani@gmail.com"/>
          </div>
          <div className={styles.data}>
            <textarea id="review" maxLength={300} required rows={6} cols={80} style={{resize: "none"}} value={review} onChange={(e) => {setReview(e.target.value)}} placeholder="Szerintem a Dream Komplexumok..."></textarea>
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.submit}>Küldés</button>
            <button type="button" className={styles.submit}>Vissza a főoldalra</button>
          </div>
        </form>
      </div>
    </div>
  )
}