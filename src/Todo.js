import React, {useState} from 'react'
import './todo.css';
function Todo(){

    const [data ,setData] = useState([])
    const [value, setvalue] = useState("")

    const OnInput = (e) => {
    

        setvalue(e.target.value)
        

    }
    const onClicked =()=>{
        setData([...data,value])
        // console.log(data)
    }

    const poop =() =>{
        let temp = data
        data.pop(value)
        setData(temp)
        console.log(temp)

    }

    return(
        <>
        <div>
            
        <input placeholder ='Enter today work'  value={value} onChange={OnInput} />
        </div>
        <div>
            <button onClick={onClicked}> Add it on the list</button>
            <button onClick={poop}> pop</button>
        </div>
        <div>
        {data.map((data,i)=>(
            <>
            <div className='first'> {i+1} {data} <p>remove</p> </div>
            </>
       ) ) }

        </div>
        </>
    )
}
export default Todo;