import { useState } from "react"
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {


  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
  const [age, setAge] = useState(user.age ||"")
  const [gender, setGender] = useState(user.gender || "")
  const [about, setAbout] = useState(user.about || "")
  const [error, setError] = useState("")
  const dispatch = useDispatch()



  const saveProfie = async () => {
    try
    {
      const res = await axios.patch(BASE_URL + "/profile/edit", {
        firstName,
        lastName,
        photoUrl,
        age,
        gender, 
        about
      }, {withCredentials: true})
      console.log(res);
      dispatch(addUser(res.data.data))
      setError("")
    }
    catch(err)
    {
      console.log(err);
      setError(err.response.data)
    }
  }
       
  return (

    // use grid here 
    // at toast
    <div className="flex justify-center items-center gap-16">

      <UserCard user={user}/>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Update Profile</legend>

        <label className="label">Firstname</label>
        <input type="text" className="input" placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label className="label">Lastname</label>
        <input type="text" className="input" placeholder="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label className="label">Image URL</label>
        <input type="url" className="input" placeholder="https://www..." value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />

        <label className="label">Age</label>
        <input type="number" className="input" placeholder="21" value={age} onChange={(e) => setAge(e.target.value)} />

        <label className="label">Gender</label>
        <input type="text" className="input" placeholder="eg: male" value={gender} onChange={(e) => setGender(e.target.value)} />

        {/* <label className="label">Gender</label>
        <select name="gender" value={gender} id="label" className="border border-gray-300 rounded py-2.5 px-2">
            <option className="bg-base-300" selected>Select your gender</option>
            <option className="bg-base-300" value="male">Male</option>
            <option className="bg-base-300" value="female">Female</option>
            <option className="bg-base-300" value="other">Other</option>
        </select> */}

        <label className="label">About</label>
        <textarea name="about" rows={4} id="label" className="border border-gray-100 rounded py-2 px-2" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Write Bio..."></textarea>


        <button onClick={saveProfie} className="btn btn-neutral mt-4">Save Profile</button>

        <p className="text-red-500">{error}</p>
      </fieldset>

      
    </div>
  )
}

export default EditProfile