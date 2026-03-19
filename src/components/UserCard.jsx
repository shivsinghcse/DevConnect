
const UserCard = ({user}) => {
    const {firstName, lastName, about, age, gender, photoUrl} = user
    // console.log("pg", user);
    return (
    <div className="flex justify-center items-center h-[80vh]">
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure className=" w-96 aspect-square">
                <img
                src={photoUrl ?? "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                alt="Shoes"
                className="w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
                {age && gender && <p className="capitalize">{`${age}, ${gender}`}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center gap-8 mt-4">
                <button className="btn btn-primary py-2 px-12 ">Ignore</button>
                <button className="btn btn-secondary py-2 px-8">Send Request</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard