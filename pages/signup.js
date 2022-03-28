import {useState} from 'react'
import Link from 'next/link'
export default function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(email,password)
    }
  return (
    <div className="container center">
        <h3>Please Signup!</h3>
        <form onSubmit={(e)=>handleSubmit(e)}> 
           
            <div className="input-field">
                <input type="text" placeholder="Type your name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className='btn #b2ebf2 cyan lighten-4'>Signup</button>
            <Link href="/login"><h5>Already Have an account</h5></Link>
        </form>
    </div>
  )
}
