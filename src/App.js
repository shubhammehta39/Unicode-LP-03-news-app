// import logo from './logo.svg';
// import './App.css';
// import { Button } from '@mui/material';
import {
  BrowserRouter,
  RouterProvider,
  Route, Routes
} from "react-router-dom";
import LoginForm from './components/Loginform';
import GetNews from './components/GetNews';
import Signup from './components/Signup';
import NewData from "./components/NewData";
// import ReactDOM from "react-dom/client";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
//   <RouterProvider router={router} />
// </React.StrictMode>
// )


function App() {
  return (
    <div className="App">
      {/* <h3>helloo</h3> */}
      {/* <Button variant="contained">Text</Button>
      <Button variant="contained">Contained</Button> */}
      <div className='heading'>
        <h1 className='heading'>Welcome to <span className='heading-inside'>News24</span> </h1>
      </div>
      {/* <Signup /> */}

      {/* <LoginForm /> */}
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Signup />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/GetNews" element={<GetNews />} />
          <Route path="/GetNews/:index" element={<NewData />} />


        </Routes>
      </BrowserRouter>
      {/* <GetNews /> */}

      {/* <div id='output'>hey</div> */}
    </div>

  );

}

export default App;
