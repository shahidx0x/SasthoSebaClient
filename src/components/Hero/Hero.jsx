import useDoctorlist from "../../hooks/useDoctorlist";
import { DoctorCard } from "../DoctorCard/DoctorCard";
import { State } from "../Stat/State";

export const Hero = () => {
  const [doctorlist] = useDoctorlist();
  return (
    <div>
      <div
        className="hero lg:h-[150vh] 2xl:h-[100vh]"
        style={{
          backgroundImage:
            "url(https://media-exp1.licdn.com/dms/image/C4E1BAQG4fkEsZPThGw/company-background_10000/0/1612393273412?e=2147483647&v=beta&t=BlBoJiN1jNKpUny5b1vZtzAFRr3EdZh2HG6LnLlEvmw)",
        }}
      >
        <State />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-auto">
            <h1 className="mb-5 text-5xl font-bold mt-[-5rem]">
              Our Top Doctors
            </h1>
            <div className="flex flex-col lg:flex-row gap-6 ">
              {doctorlist.splice(1, 3).map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
