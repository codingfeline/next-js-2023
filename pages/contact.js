import Image from 'next/image'
import { useState, useRef } from 'react'

const Contact = () => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const clearAll = () => {
    setEmail('')
    setName('')
    setMessage('')
  }

  return (
    <>
      <h2>Contact</h2>
      <form className="mb-0 space-y-6" onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="btn">Submit</button>
        <button onClick={clearAll}>Clear</button>
      </form>
      {name && email && message && name + ', ' + email + ', ' + message}
    </>
  )
}

export default Contact
