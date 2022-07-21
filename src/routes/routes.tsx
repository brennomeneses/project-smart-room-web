import { BrowserRouter,Route, Routes as RouterSwitch } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import ControllPanel from "../pages/controllPanel";
import Login from "../pages/login";
import VizualizeData from "../pages/vizualizeData";
import DeleteAllData from "../pages/deleteAllData";
import PrivateRoute from "./privateRoute";

function Routes() {
    return(
    <BrowserRouter>
        <RouterSwitch>
          <Route path='/' element={<Login/>} />

          {/* PRIVATE ROUTES */}
          <Route path='/dashboard' element={
              <PrivateRoute>
                <DashboardLayout children={<ControllPanel/>}/>
              </PrivateRoute>
            }/>
          <Route path='/datas' element={
            <PrivateRoute>
              <DashboardLayout children={<VizualizeData/>}/>
            </PrivateRoute>
          } />
          <Route path="/delete-data" element={
            <PrivateRoute>
              <DashboardLayout children={<DeleteAllData/>}/>
            </PrivateRoute>
            }/>
        </RouterSwitch>
    </BrowserRouter>
    );    
}

export default Routes;