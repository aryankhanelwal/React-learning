import React  from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import  Prop  from './Prop'





function MainFile(){





  return(
    <>
    <Navbar title="Foodish"/>
    <Cart/>
    <Prop 
      title='Movie 1' 
      text='hello worls is best' 
      link='google' 
      src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg'/>
    <Prop 
      title='Movie 2' 
      text='hello worls best' 
      link='google2'
      src='https://images.unsplash.com/photo-1612012460576-5d51b5b04b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
    <Prop 
      title='Movie 3' 
      text='hello worls is ' 
      link='google3' 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_nyrTbM4iuDpvtCOccijgz8iDcjJTLUaa0VT8KpJ&s'/>
    <Prop 
      title='Movie 4'
      text='hello ' 
      link='google4' 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_nyrTbM4iuDpvtCOccijgz8iDcjJTLUaa0VT8KpJ&s'/>
  
    </>
  )  

}


export default MainFile ;






