import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService,{ User } from "../services/user-service";

const useUser = () => {
  // connect to back end
  // get -> promise -> response
  // if promise rejected -> error
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    // Cancel async fetch
    // const controller = new AbortController();

    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    // .get<User[]>("/users", {
    //   signal: controller.signal,
    // }) //this will return a Promise

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      }); // use for catch error for sth go wrong while fetching
    // .finally(() => {
    //   setLoading(false);
    // });
    return () => cancel();
  }, []);

  return { users, error, isLoading, setUsers, setError};
}

export default useUser;