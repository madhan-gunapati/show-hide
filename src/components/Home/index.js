import { useState } from "react"

const Home = ()=>{
    const [names , setNames] = useState({showFirstName:true , showLastName:true})

    function changeFirstName(){
        setNames((p)=>({...p , showFirstName:!p.showFirstName}))
    }

    function changeLastName(){
        setNames((p)=>({...p , showLastName:!p.showLastName}))
    }

    return <div>
        <h1>Show / Hide</h1>
        <button tyep='button' onClick={changeFirstName}>Show First Name</button>
        {names.showFirstName?<p>First Name: Jon</p> :''}
        
        <button type='button' onClick={changeLastName}>Show Last Name</button>
        {names.showLastName? <p>Last Name: <span style={{'textDecoration':'line-through'}}>snow</span> Targerian</p> : ''}
        
    </div>
}

export default Home