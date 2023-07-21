import { useEffect, useState } from "react";
const useAmbulence = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/am/usr/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  return [data];
};
export default useAmbulence;
