import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../../DashBoard/DashBoard";
import UserForm from "../../pages/UserForm";

export default function AppRouter(){
    return (
        <>
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/DashBoard/*" element={<DashBoard />} />
                <Route path="UserForm" element={<UserForm />} />
            </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}