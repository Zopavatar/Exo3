import React from 'react'
import './public/style/style.css'

export const Info = ({param_1,param_2,param_3,param_4}) => {
  return (
    <div id="card">
        <img src={param_1} alt="" />
        <p>Nom: {param_2}</p>
        <p>Age: {param_3}</p>
        <p>Taille: {param_4}</p>
    </div>
  )
}