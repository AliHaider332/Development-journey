import HandleRoutes from './Routes/HandleRoutes';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
function App() {
  const loadingStatus = useSelector((state) => state.loading);
  console.log(loadingStatus);
  return (
    <>
      <Navbar />
      {loadingStatus && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <HandleRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
