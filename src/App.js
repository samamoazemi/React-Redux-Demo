import './App.css';
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from './redux/store';
import HookCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HookCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
