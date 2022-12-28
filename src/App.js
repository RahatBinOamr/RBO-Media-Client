
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';


function App() {
  return (
    <div className="mr-5 ml-5">
      <RouterProvider router={router}/>

    </div>
  );
}

export default App;
