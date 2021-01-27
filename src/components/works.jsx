import React from "react"
import styles from './works.module.css'

const Works = ({works}) => {
  console.log(works)

  return (
    <ul>
      {works.map((w, i) => (
        <li key={i}>
            <div className={`${styles.box}`}>
          <div className={`${styles.container}`}>
            <img src={`"${w.img}"`} alt="Girl in a jacket" width="500" height="600"/>
            <h1>{`${w.name}`}</h1>
            <h3>Description</h3>
            <p>{w.description}</p>
            <button>
              <a href={`${w.url}`}>View site</a>
            </button>
          </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Works
