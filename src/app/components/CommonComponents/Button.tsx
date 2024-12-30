
import React from 'react'
import styles from '../Checkout/AddnewAddress.module.css'
export default function Button(props : any) {
  return (
    <div   className={styles.btn} onClick={props.onButtonClick}>
        <p>{props.text}</p>
    </div>
  )
}