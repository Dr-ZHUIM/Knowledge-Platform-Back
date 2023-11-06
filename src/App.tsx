import { useEffect } from 'react';
import { routes } from './routes/routes';
import { useLocation, Route, Routes } from 'react-router-dom';
import Page from './components/Page';

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log('routes', routes);
  }, []);

  return (
    <div className="w-full p-[20px]">
      <h1>My React-Ts App</h1>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<Page isAuth={route.isAuth} default={route.component} />}
            key={route.path}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
