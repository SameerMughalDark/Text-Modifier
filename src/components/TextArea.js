import React from 'react'

export default function TextArea(props) {
  return (
    <div className='container my-3'>
        <h1>{props.heading}</h1>
      <div className="form-floating">
  <textarea className="form-control"  placeholder="Drop Your Selected Text Here:" id="floatingTextarea2" style={{height: '200px'}}></textarea>
  <label htmlFor="floatingTextarea2">Please Drop Your Text Here:</label>
</div>
    </div>
  )
}
