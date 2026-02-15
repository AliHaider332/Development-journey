import HandleRoutes from './Routes/HandleRoutes';
import Navbar from './components/navbar';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuthFirst } from './Store/Feature/Authentication';
function App() {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(checkAuthFirst());
  }, []);
  return (
    <>
      <Navbar />
      {/* {loadingStatus && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )} */}

      <HandleRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
