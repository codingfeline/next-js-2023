import Image from 'next/image'

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form className="mb-0 space-y-6">
        <div>
          <label htmlFor="name">
            Name
            <input type="text" id="name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input type="email" id="email" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <textarea id="message" cols="30" rows="10"></textarea>
          </label>
        </div>
      </form>
    </div>
  )
}

export default Contact
