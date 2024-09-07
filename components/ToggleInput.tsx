import React from 'react'

const ToggleInput = () => {
  return (
    <label className="flex justify-center items-center cursor-pointer gap-2">
    <span className="label-text text-white text-lg">US</span>
    <input type="checkbox" value="synthwave" className="toggle theme-controller bg-white" />
    <span className="label-text text-white text-lg">UK</span>
    </label>
  )
}

export default ToggleInput