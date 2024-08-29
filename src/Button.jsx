function Button({text}){
    console.log(text)
    return(  
      <div>
          <button className="bg-blue-500 py-2 px-6 rounded md m-2 text-white">{text} </button>
      </div>
      )
  
  }
  export default Button;
  
  // index.html >>>>> main.jsx >>>>> app.jsx >>>>all component