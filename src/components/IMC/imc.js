import React from 'react'

export const Imc = ({param_1,param_2,param_3}) => {
  return (
    <div>
        <div>L'IMC de {param_1} est de {Math.floor(param_3/Math.pow(param_2,2))}</div>
    </div>
  )
}
