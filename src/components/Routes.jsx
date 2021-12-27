import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Results from "./Results";

const RoutePage = () => {
    return (
        <div>
           <Routes>
               <Route path="/" element={<Navigate to="/search" />}/>
               <Route  path="/" element={<Results />}>
               <Route path="/search" element={<Results/>} />
                  <Route path="/images" element={<Results/>} />
                  <Route path="/news" element={<Results/>} />
                  <Route path="/videos" element={<Results/>} />
               </Route>
           </Routes> 
        </div>
    )
}

export default RoutePage
