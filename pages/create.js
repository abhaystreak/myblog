import {useState} from 'react'
import Link from 'next/link'
import withAuth from './authentication'
 function create() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(email,password)
    }
  return (
    <div className="container center">
        <h3>Please Login!</h3>
        <form onSubmit={(e)=>handleSubmit(e)}> 
           
            <div className="input-field">
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className='btn #b2ebf2 cyan lighten-4'>Login</button>
            <Link href="/signup"><h5>Don't Have a account</h5></Link>
        </form>
    </div>
  )
}

export default  withAuth(create);