import React from 'react'
import styles from './button.module.css'


const Button = (props) => {
  const {text= "btn", handleClick = ()=>{}} = props
  return (
    <div>
    <button className={styles.button} onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button