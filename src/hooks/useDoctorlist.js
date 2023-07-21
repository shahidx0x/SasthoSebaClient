import { useEffect, useState } from "react";
const useDoctorlist = () => {
  const [doctorlists, setDoctorlists] = useState([]);
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/doctorlist")
      .then((res) => res.json())
      .then((data) => setDoctorlists(data));
  });
  return [doctorlists, setDoctorlists];
};
export default useDoctorlist;
