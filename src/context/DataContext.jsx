//NOTE STEP 1   
import { createContext } from "react";

// Step 2 
const DataContext = createContext()

// Step 3 
export const DataProvider = () =>{
    const data = "Hello this is coming from context"
    return <DataContext.Provider value={{data}}>
    
    </DataContext.Provider>
}