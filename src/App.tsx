import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Widget } from './components/widget/Widget';
import { Userinfo } from './components/userinfo/Userinfo';
import usersData from './initData.json';
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Widget usersInfo={usersData} />,
  },
  {
    path: "/userinfo",
    element: <Userinfo />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;