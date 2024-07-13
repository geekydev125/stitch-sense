import React from 'react'

function MessageSentSuccess() {
  return (
    <div className='text-dark text-center bg-light p-5 rounded-2xl'>
        <h4 className='text-5xl mb-5 text-darkGreen'>Thank you for your submission!</h4>
        <p className='text-xl'>Your details have been sent to Stitch Sense.</p>

        <p className='text-xl'>A representative will get in touch with you soon via your preferred contact method.</p>
    </div>
  )
}

export default MessageSentSuccess