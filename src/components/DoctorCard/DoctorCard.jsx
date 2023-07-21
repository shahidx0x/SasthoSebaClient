import { Link } from "react-router-dom";

export const DoctorCard = (props) => {
  const { _id, img, name, degree, speciality, chember } = props.doctor;
  return (
    <div className="">
      <div class="card w-96 bg-base-100 h-[40rem] shadow-xl">
        <figure class="">
          <img
            src={
              img ||
              "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
            }
            alt={name || "name"}
            class="w-96"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h1 class="card-title text-black ">{name || "name"}</h1>
          <p className="text-black">{degree || "degree"}</p>
          <p className="text-black">{speciality || "speciality"}</p>
          <p className="text-black">{chember || "chember"}</p>
          <div class="card-actions">
            <Link className="t-n" to={`/appointment/${_id}`}>
              <button class="btn btn-primary">Get Appoinment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
