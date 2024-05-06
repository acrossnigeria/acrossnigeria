import React, { useState } from 'react'

const Checkbox = ({handleTermsCheckboxChange}) => {
      const [termsAccepted, setTermsAccepted] = useState(false);
      const handleChange=(event)=>{
        const isChecked=event.target.checked;
        handleTermsCheckboxChange(isChecked)
        setTermsAccepted(isChecked)
      }
  return (
    
<div className="mt-4">
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={termsAccepted}
            className='accent-yellow-700'
            onChange={handleChange}
          />
          <label htmlFor="termsCheckbox" className="ml-2">
            Accept our terms and conditions
          </label>
        </div>
  )
}

export default Checkbox
