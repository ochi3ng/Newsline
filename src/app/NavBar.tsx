import { useNavigate } from "react-router-dom"

export function Navbar() {
    const nav=useNavigate()
    const HomePage=()=>{
        nav('/home')
    }

    const navigate=useNavigate()
    const WorldNews=()=>{
        navigate('/world')
    }
return (<div className="nav">
    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWZJ89t2W06s0Z0iPWh6vLLwdPXF5SBzYNH1wjNM7ALx9PAGd_KTb&usqp=CAU"/>
    <h1 className="Newsline">Breaking News</h1>
  <div className="nav-content">
  <p onClick={HomePage}>Home</p>
    <p onClick={WorldNews}>World</p>
    <p>Science</p>
    <p>Fictions</p>
  </div>
</div>)
    }