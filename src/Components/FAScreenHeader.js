import { Button } from "antd";
import FAButton from "./FAButton";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";


export default function FAScreenHeader() {

    const navigate = useNavigate();

    const back = () => {
        navigate('/DashBoard')
    }

    const userForm = () => {
        navigate('/DashBoard/UserForm')
    }

    return (
        <>
            <div>
                <div>
                    <div className="bg-gray-200 p-3 flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                            {/* Back Icon */}
                            <IoArrowBackCircle
                                onClick={back}
                                className="text-xl cursor-pointer"  // Adjust the size of the icon
                            />
                            {/* Heading */}
                            <h1 className="text-xl font-bold">Users</h1>
                        </div>
                        {/* Button */}
                        {/* <Link to={'/DashBoard/UserForm'}> */}
                            <FAButton onClick={userForm} label='UserForm' className="bg-cyan-950 text-white px-4 py-2 rounded hover:bg-yellow-600" />
                        {/* </Link> */}
                    </div>

                </div>
            </div>
        </>
    )
}