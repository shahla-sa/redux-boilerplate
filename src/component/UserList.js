import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../stateManagement/actions/userAction";

const UserList = ({ users, getUsers }) => {
  useEffect(async () => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(UserList);
