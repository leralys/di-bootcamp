import React, { Component } from 'react';


function FormComponent(props) {
  return (
    <main>
      <h1>Sample form</h1>
      <form action="http://localhost:3000/" className='Form-name'>
        <div>
          <input onChange={props.handleChange} name="firstname" autoComplete="off" placeholder="First Name"></input>
          <br /><br />
          <input onChange={props.handleChange} name="lastname" autoComplete="off" placeholder="Last Name"></input>
          <br /><br />
          <input onChange={props.handleChange} name="age" autoComplete="off" placeholder="Age"></input>
          <br /><br />
        </div>
        <div className='Form-age'>
          <label htmlFor="female">
            <input onChange={props.handleChange} type="radio" id="female" name="gender" value="female" />
            Female
          </label>
          <br />
          <label htmlFor="male">
            <input onChange={props.handleChange} type="radio" id="male" name="gender" value="male" />
            Male
          </label>
          <br />
          <label htmlFor="non-binary">
            <input onChange={props.handleChange} type="radio" id="non-binary" name="gender" value="non-binary" />
            Non-binary gender</label>
        </div>
        <br />
        <div className='Form-destination'>
          <label className='Form-destination-header'>Select your destination</label>
          <br />
          <select onChange={props.handleChange} name="destination" id="destination" className='Form-destination-input'>
            <option value="">-- Please Choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>
        <br />
        <div className='Form-dietary'>
          <label className='Form-dietary-header'>Dietary restrictions:</label>
          <br />
          <input onChange={props.handleChange} type="checkbox" id="nuts-free" name="isNutsFree" />
          <label htmlFor="nuts-free">Nuts free</label>
          <br />
          <input onChange={props.handleChange} type="checkbox" id="lactose-free" name="isLactoseFree" />
          <label htmlFor="lactose-free">Lactose free</label>
          <br />
          <input onChange={props.handleChange} type="checkbox" id="is-vegan" name="isVegan" />
          <label htmlFor="is-vegan">Vegan</label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <section className="Form-entered-values">
        <h2>Entered information:</h2>
        <p>Your name: {props.firstname} {props.lastname}</p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <p>Your dietary restrictions:</p>
        <div className='Entered-restrictions'>
          <p>**Nuts free: {props.isNutsFree ? 'Yes' : 'No'}</p>
          <p>**Lactose free: {props.isLactoseFree ? 'Yes' : 'No'}</p>
          <p>** Vegan meal: {props.isVegan ? 'Yes' : 'No'}</p>
        </div>
      </section>
    </main>
  )
}

export default FormComponent;