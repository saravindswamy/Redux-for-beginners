import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.login);
  const dispatch = useDispatch();

  let signin_status = "";
  if (logged === false) {
    signin_status = "sign_in";
  } else {
    signin_status = "sign_out";
  }

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(isLogged())}> {signin_status}</button>
      {logged ? (
        <p>This is a valuable information </p>
      ) : (
        <h1>Please login to see the content</h1>
      )}
    </div>
  );
}

export default App;
