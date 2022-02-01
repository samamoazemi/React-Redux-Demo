import './App.css';
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HookCakeContainer from "./components/HooksCakeContainer";
import HookIceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HookCakeContainer/>
        <HookIceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
