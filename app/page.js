import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.line}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <p>A bla blab blabla. Blablablaabla blabala blaa! blabla.</p>
            </div>
          </div>
          <div className={styles.title}>
            <p>Dream Komplexumok</p>
            <div className={styles.underline} />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.apartments}>
            <h1>Az apartmanokhoz görgess lejjebb...</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* <div className={styles.textContainer}>
            <div className={styles.text}>
              <p>A bla blab blabla. Blablablaabla blabala blaa! blabla.</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.apartmanSection}>
        <div className={styles.title}>Apartmanjaink:</div>
        <div className={styles.apartments}>
          <button>
            <div>
              <span>
                <h1>Dream House</h1>
                <p>
                  Nagyon patika apartman, kurvajó gyertek ide. Ennél jobbat
                  úgyse találsz csoró, kattintsál köszi!
                </p>
              </span>
              <span>Részletek</span>
            </div>
          </button>
          <button>
            <div>
              <span>
                <h1>Dream Tópart</h1>
                <p>
                  Nagyon patika apartman, kurvajó gyertek ide. Ennél jobbat
                  úgyse találsz csoró, kattintsál köszi!
                </p>
              </span>
              <span>Részletek</span>
            </div>
          </button>
          <button>
            <div>
              <span>
                <h1>Dream Apartman</h1>
                <p>
                  Nagyon patika apartman, kurvajó gyertek ide. Ennél jobbat
                  úgyse találsz csoró, kattintsál köszi!
                </p>
              </span>
              <span>Részletek</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
