import { useEffect, useState } from "react";
const useUsers = () => {
  const [userlists, setUserlists] = useState([]);
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setUserlists(data));
  }, [userlists]);
  return [userlists, setUserlists];
};
export default useUsers;
