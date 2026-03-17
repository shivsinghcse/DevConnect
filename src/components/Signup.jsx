import axios from "axios"
import { useState } from "react"
const Signup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {
    try
    {
      await axios.post("http://127.0.0.1:7777/signup", {
        firstName,
        lastName,
        emailId,
        password,
      }, {withCredentials: true})
      console.log("done");
    }
    catch(err)
    {
      console.log(err);
    }
  }
  return (
    <div className="flex h-[80vh] justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Sign Up</legend>

        <label className="label">Firstname</label>
        <input type="text" className="input" placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label className="label">Lastname</label>
        <input type="text" className="input" placeholder="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={handleSignup} className="btn btn-neutral mt-4">Signup</button>
      </fieldset>
    </div>
  )
}

export default Signup