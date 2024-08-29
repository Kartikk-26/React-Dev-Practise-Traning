import Button from "./Button";
import Footer from "./Footer";
import NavBar from "./NavBar"; // Use NavBar instead of Navbar
import './App.css'; // You might still need this for any custom styles

function App() {
  const styles = { color: 'red', backgroundColor: 'blue' };
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar /> {/* Add the NavBar component here */}
      <div className="flex-grow">
        {/* Main content */}
        <Button text="click" />
        <Button text="Submit" />
        <Button text="apply" />
        <Button text="contact" />
        <h1 style={styles}>React</h1>
        <input maxLength={5} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
