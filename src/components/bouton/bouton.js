import React from 'react'

export const Bouton = ({param_1,param_2,param_3}) => {
  return (
    <div>
        <button type={param_1} onClick={param_2}>{param_3}</button>
    </div>
  )
}
