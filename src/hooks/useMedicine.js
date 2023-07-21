import { useEffect, useState } from "react";
const useMedicine = () => {
  const [medicine, setMedicine] = useState([]);
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/medicine")
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);
  return [medicine, setMedicine];
};
export default useMedicine;
