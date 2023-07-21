import { useEffect, useState } from "react";

const useOrderSummery = () => {

  const [orderSummery, setOrderSummery] = useState([]);
 
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/payment-history")
      .then((res) => res.json())
      .then((data) => setOrderSummery(data));
  }, []);


  return [orderSummery];
};
export default useOrderSummery;
