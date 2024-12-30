import React from 'react'
import styles from '../Checkout/AddnewAddress.module.css'

export default function CommonInputField(props : any) {
  return (
    <div>
           <p className={styles.label}>{props?.label}</p>
           <input name={props?.name} value={props?.value} className={styles.input} onChange={props?.onChange} type="text" placeholder="Enter" />
    </div>
  )
}
