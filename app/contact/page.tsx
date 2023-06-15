import React from 'react'
import ProfileButton from '../Components/ProfileButton';

const Contact = () => {
  return (
    <main className="flex flex-col justify-between">
      <h1 className="2xl">Contact Me</h1>
    <form>
        <label className="p-2">
          Name
          <input className="m-3" required type="text" name="name" />
        </label>
        <label className="p-2">
          Email
          <input className="m-3" type="text" name="email" />
        </label>
        
        <label className="p-2">
          Email
          <select className="m-3">
            <option value="tutoring">Private Tutoring</option>
            <option value="coding">Coding Work</option>
            <option value="coding">Other</option>
          </select>
        </label>
      </form>

      
    </main>
  )
}

export default Contact;