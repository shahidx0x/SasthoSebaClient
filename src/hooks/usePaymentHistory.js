import { useEffect, useState } from "react";
const usePaymentHistory = () => {
  const [phistory, setPhistory] = useState([]);
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/payment-history")
      .then((res) => res.json())
      .then((data) => setPhistory(data));
  }, []);
  return [phistory];
};
export default usePaymentHistory;
