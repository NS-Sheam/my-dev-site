import Header from "../../components/Header/Header";


const layout = ({ children }) => {
  return (
    <div className="bg-bg-color min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export default layout;
