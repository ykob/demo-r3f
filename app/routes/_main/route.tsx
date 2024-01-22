import { Outlet } from "@remix-run/react";

export default function MainLayout() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Outlet />
    </div>
  );
}
