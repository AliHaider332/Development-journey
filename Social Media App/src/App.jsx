import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './Components/SideBar';
import FooterElement from './Components/FooterElement';
import LeftContainer from './Components/LeftContainer';
import Loading from './Components/Loading'; // <-- Make sure this is imported
import { Outlet, useNavigation } from 'react-router-dom'; // <-- Add useNavigation

function App() {
  const navigation = useNavigation(); // <-- This tracks navigation state

  return (
    <>
      <div className="FullContainer d-flex">
        <SideBar />
        <LeftContainer>
          {navigation.state === 'loading' ? <Loading /> : <Outlet />}
        </LeftContainer>
      </div>
      <FooterElement />
    </>
  );
}

export default App;
