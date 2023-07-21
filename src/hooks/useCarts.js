import { useEffect, useState } from "react";
const useCarts = () => {
  const [userCarts, setUserCarts] = useState([]);
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/carts")
      .then((res) => res.json())
      .then((data) => setUserCarts(data));
  }, [userCarts]);
  return [userCarts, setUserCarts];
};
export default useCarts;
