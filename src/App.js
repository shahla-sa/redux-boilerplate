import { Provider } from "react-redux";
import store from "./stateManagement/store";
import PostList from "./component/PostList";
import UserList from "./component/UserList";

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <PostList />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
