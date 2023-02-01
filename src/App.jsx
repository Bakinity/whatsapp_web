import { Login, Main } from "./pages";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Result, Button } from "antd";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='app' element={<Outlet />}>
          <Route index element={<Main />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='*' element={<Navigate to={process.env.REACT_APP_404} />} />

        <Route
          path='404'
          element={
            <Result
              status='404'
              title='404'
              subTitle='Sorry, the page you visited does not exist.'
              extra={
                <Button href={process.env.REACT_APP_HOME} type='primary'>
                  Back Home
                </Button>
              }
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
