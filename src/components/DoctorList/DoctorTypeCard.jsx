import { Link } from "react-router-dom";

export const DoctorTypeCard = (data) => {
  const shadowStyle = { boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}
  const {
    _id,
    name,
    Mail,
    chember,
    degree,
    department,
    experience,
    fee,
    img,
    speciality,
    time,
    status 
  } = data.data;
  return (
    <div>
      <div class="mt-10 card w-96 bg-base-100 shadow-sm">
        <img
          src={
            img ||
            "data:image/png;base64,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"
          }
          alt="Shoes"
        />
   
        <div class="card-body shadow-2xl border-b-4" style={shadowStyle}>
          <div className="flex gap-16 justify-center items-center">
            <h2 class="card-title font-bold">{name}</h2>
            <p>{status !== "online" ? (<span className="font-mono font-bold text-gray-600">offline</span>) : (<span className="font-mono font-b
             text-green-500">online</span>)}</p>
          </div>
          <p className="font-mono font-bold"><span className="font-bold">Speciality : </span>{speciality}</p>
          <p className="card-title"><span className="font-bold">Department : </span>{department}</p>
          <p className="font-bold text-indigo-700">Fee : { fee} BDT</p>
          <div class="card-actions justify-end">
            <Link className="t-n" to={`/appointment/${_id}`}>
              <button class="btn btn-primary bg-cyan-600">Get Appoinment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
