import Navbar from '../Navbar.jsx'
import Home from '../Home.jsx';
function HomeLayout() {
  return (
   
    <div>
      <Navbar />
      <Home 
        title="Welcome to JOBIFY!"
        description="Find and apply to your dream tech job today."
      />
      
    </div>
  );
}
export default HomeLayout;