import { Outlet } from 'react-router-dom';

function layout() {
  return (
    <div className="container m-auto">
      <h1 className="text-6xl font-bold uppercase">
        layout Base / Todas paginas
      </h1>
      <Outlet />
    </div>
  );
}

export default layout;
