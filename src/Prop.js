import React from 'react'

function Netflix (props) 
 {


    return(
<div>
        <div class="card" style={{width: 500}}>
  <img class="card-img-top" src={props.src} alt="Card image cap" style={{width:100 , height:100}}/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-primary">{props.link}</a>
  </div>
  </div>
  </div>


    )
}
export default Netflix;