import Navbar from "@shared/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="px-14 py-10">
      <nav>
        <Navbar />
      </nav>
      {children}
    </div>
  );
};

export default Layout;
