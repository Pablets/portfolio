import React from "react"
import styles from "./works.module.css"

const Works = ({ works }) => {
  return (
    <div className={`${styles.box}`}>
      {works.map((w, i) => (
        <div key={i} className={`${styles.container}`}>
          <img src={`${w.img}`} alt="Girl in a jacket" />
          <h1 className={`${styles.h1}`}>{`${w.name}`}</h1>
          <h3 className={`${styles.h3}`}>Description</h3>
          <p className={`${styles.p}`}>{w.description}</p>
          <button className={`${styles.button}`}>
            <a href={`${w.url}`}>View site</a>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Works
