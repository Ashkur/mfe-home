// COMPONENTS
import { NavBar } from "@ashkur/teste.ui.nav-bar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
