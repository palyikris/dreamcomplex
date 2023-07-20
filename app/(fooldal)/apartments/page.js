"use client"

import styles from "./page.module.css";
import Circle from '../../../components/apartments/circle';

export default function Page() {
  return (
    <>
        <div className={styles.clipped}>
            <h1>
                Dream 
                <span>
                    <div>
                        <div>
                            <p>Tópart</p>
                        </div>
                        <div>
                            <p>Lelle</p>
                        </div>
                        <div>
                            <p>Őszöd</p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </span>
            </h1>
            <div className={styles.sep}></div>
            <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis deleniti tenetur blanditiis omnis nulla quasi consectetur maiores ducimus ut expedita repellendus tempore reiciendis aut, incidunt assumenda quae illo quam!
            </h4>
            <div className={styles.data}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <p>valami@valami.com</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <p>06306666666</p>
                </div>
            </div>
        </div>
        <div className={styles.pageContainer}>
            <Circle link="/dreamtopart" text="Dream Tópart"></Circle>
            <Circle link="/dreamlelle" text="Dream Lelle"></Circle>
            <Circle link="/dreamoszod" text="Dream Öszöd"></Circle>
        </div>
    </>
  );
}
