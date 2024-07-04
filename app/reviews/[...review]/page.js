"use client"

import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./page.module.css"
import Loader from "@/components/loader/page";
import { AddNewReview, IsReviewValid } from "@/lib/firebase";
import { usePathname, useRouter } from "next/navigation";
import { set } from "date-fns";


export default function ReviewsPage() {

  let path = usePathname()
  path = path.split("/")

  const type = path[2]
  const token = path[3]

  let router = useRouter()

  const [rating, setRating] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [review, setReview] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!token || !type) {
      router.push("/")
      return
    }
    IsReviewValid(token).then((data) => {
      if (!data) {
        router.push("/")
      }
      else {
        setIsLoading(false)
      }
    })    
    
  }, [])

  const handleRateChange = (newRating) => {
    setRating(newRating)
  }

  const handleReviewSubmission = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (name === "" || email === "" || review === "" || rating === 0) {
      alert("Minden mezőt ki kell tölteni! (Csillagot is állítani kell!)")
      setIsLoading(false)
      return
    }
    AddNewReview({ name, email, review, rating, token, type }).then(() => {
      alert("Vélemény sikeresen beküldve!")
      setIsLoading(false)
      setName("")
      setEmail("")
      setReview("")
      setRating(0)
      router.push("/")
    })
    
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.starsWrapper}>
          <h1>Egy pillanat...</h1>
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