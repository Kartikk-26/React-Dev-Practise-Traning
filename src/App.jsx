import Button from "./Button" 
function App(){
  const styles={color:'red',backgroundColor:'blue'};
  return (
    <div>
      <Button text="click"/>
      <Button text="Submit"/>
      <Button text="apply"/>
      <Button text="contact"/>
      <h1 style={styles}>react</h1>
      <input maxLength={5}/>

     
    </div>

  )
 }

export default App