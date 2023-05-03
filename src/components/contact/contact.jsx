import React from 'react'

const contact = () => {
  return (
    <div className="contact">

        <form>

          <h3>Contact</h3>
          
              <div>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <textarea placeholder='message...' cols={30} rows={10}/>
              </div>

          <button>Submit</button>

        </form>

    </div>
  )
}

export default contact