import { useState } from "react"
import axios from "axios"

const EditProfile = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [about, setAbout] = useState("")
  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")

//   const handleSignup = async () => {
//     try
//     {
//       const res = await axios.post(BASE_URL + "/signup", {
//         firstName,
//         lastName,
//         emailId,
//         password,
//       }, {withCredentials: true})
//       console.log(res);
//     }
//     catch(err)
//     {
//       console.log(err);
//     }
//   }
       
  return (
    <div className="flex h-[80vh] justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Update Profile</legend>

        <label className="label">Firstname</label>
        <input type="text" className="input" placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label className="label">Lastname</label>
        <input type="text" className="input" placeholder="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label className="label">Age</label>
        <input type="number" className="input" placeholder="21" value={age} onChange={(e) => setAge(e.target.value)} />

        <label className="label">Gender</label>
        <select name="gender" id="label" className="input">
            <option selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label className="label">About</label>
        <textarea name="about" rows={4} id="label" className="border border-gray-100 rounded" value={about} onChange={(e) => e.target.value}></textarea>


        <button className="btn btn-neutral mt-4">Save</button>
      </fieldset>
    </div>
  )
}

export default EditProfile