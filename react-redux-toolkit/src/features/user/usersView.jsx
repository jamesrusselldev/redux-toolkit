import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

function UsersView() {
  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div>List of Users: </div>
      {user.loading && <h1>Loading...</h1>}
      {!user.loading && user.error ? <p>Error: {user.error}</p> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default UsersView;
