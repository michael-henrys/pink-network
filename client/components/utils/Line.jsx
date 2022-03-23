import React from 'react'

export default function Line ({ position, color }) {
  return (
    <div className={`line-${position}-${color}`}></div>
  )
}
