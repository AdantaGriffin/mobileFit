import styles from './App.module.scss';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Components/Root/root';
import Homepage from './Components/Home/homepage';
import Routines from './Pages/Routines/routines';
import Exercises from './Pages/Exercises/exercises';
import History from './Pages/History/history';
import { ApiProvider } from './Components/Api/api';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Homepage/>}/>
    <Route path="routines" element={<Routines/>}/>
    <Route path="exercises" element={<Exercises/>}/>
    <Route path="history" element={<History/>}/>
  </Route>
))

function App() {

  return (
    <ApiProvider>
      <RouterProvider router={AppRouter}/>
    </ApiProvider>
  );
}

export default App;
