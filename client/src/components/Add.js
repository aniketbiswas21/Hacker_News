import React, { Fragment } from 'react'

const Add = () => {
    return (
        <Fragment>
        <div className='container'>
        <h2>Add a story</h2>
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">Story Title</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Source</label>
        </div>
        </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="text" class="validate" />
          <label for="password">Your Name</label>
        </div>
      </div>
      <button className='btn red waves-effect'>Submit</button>
    </form>
  </div>
  </div>
        </Fragment>
    )
}

export default Add
