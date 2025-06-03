import React, { FC } from 'react';
import { Outlet } from 'react-router';

const Layout: FC = () => {
  return (
    <div className="w-full h-full bg-primary text-secondary flex flex-col">
      {/* Main content area with margin-top for header offset and min height for full view minus (footer+header) */}
      <main className="flex-grow mt-[65px] flex justify-center min-h-[79vh]">
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
