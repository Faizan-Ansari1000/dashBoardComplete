import { Link, Route, Routes } from "react-router-dom";
import Albums from './Albums';
import Comments from './Comments';
import Photos from './Photos';
import Posts from './Posts';
import Todos from './Todos';
import Users from './Users';

import { IoMdAlbums } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa6";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { FiUploadCloud } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { PiUsersFill } from "react-icons/pi";
import UserForm from "../pages/UserForm";

export default function DashBoard() {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-full lg:w-1/4 p-4 lg:p-6 hidden lg:block border rounded-md">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                <nav className="space-y-2">
                    <Link to={'/DashBoard/Albums'} className="flex items-center p-2 rounded hover:bg-gray-700">
                        <IoMdAlbums className="mr-2" />
                        Albums
                    </Link>
                    <Link to={'/DashBoard/Comments'} className="flex items-center p-2 rounded hover:bg-gray-700">
                        <FaRegCommentDots className="mr-2" />
                        Comments
                    </Link>
                    <Link to={'/DashBoard/Photos'} className="flex items-center p-2 rounded hover:bg-gray-700">
                        <TbPhotoSquareRounded className="mr-2" />
                        Photos
                    </Link>
                    <Link to={'/DashBoard/Posts'} className="flex items-center p-2 rounded hover:bg-gray-700">
                        <FiUploadCloud className="mr-2" />
                        Posts
                    </Link>
                    <Link to={'/DashBoard/Todos'} className="flex items-center p-2 rounded hover:bg-gray-700">
                        <LuListTodo className="mr-2" />
                        Todos
                    </Link>
                    <Link to={'/DashBoard/Users'} className="flex items-center p-2 rounded hover:bg-gray-700">
                        <PiUsersFill className="mr-2" />
                        Users
                    </Link>
                </nav>
            </div>

            {/* Header for Mobile View */}
            <div className="block lg:hidden bg-gray-800 text-white">
                <div className="flex overflow-x-auto text-xs ps-2 space-x-1 font-bold">
                    <Link to={'/DashBoard/Albums'} className="flex flex-col items-center p-2 rounded hover:bg-gray-700">
                        <IoMdAlbums className="mb-1 text-2xl" />
                        Albums
                    </Link>
                    <Link to={'/DashBoard/Comments'} className="flex flex-col items-center p-2 rounded hover:bg-gray-700">
                        <FaRegCommentDots className="mb-1 text-2xl" />
                        Comments
                    </Link>
                    <Link to={'/DashBoard/Photos'} className="flex flex-col items-center p-2 rounded hover:bg-gray-700">
                        <TbPhotoSquareRounded className="mb-1 text-2xl" />
                        Photos
                    </Link>
                    <Link to={'/DashBoard/Posts'} className="flex flex-col items-center p-2 rounded hover:bg-gray-700">
                        <FiUploadCloud className="mb-1 text-2xl" />
                        Posts
                    </Link>
                    <Link to={'/DashBoard/Todos'} className="flex flex-col items-center p-2 rounded hover:bg-gray-700">
                        <LuListTodo className="mb-1 text-2xl" />
                        Todos
                    </Link>
                    <Link to={'/DashBoard/Users'} className="flex flex-col items-center p-2 rounded hover:bg-gray-700">
                        <PiUsersFill className="mb-1 text-2xl" />
                        Users
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-2 lg:p-2">
                <Routes>
                    <Route path="/Albums" element={<Albums />} />
                    <Route path="/Comments" element={<Comments />} />
                    <Route path="/Photos" element={<Photos />} />
                    <Route path="/Posts" element={<Posts />} />
                    <Route path="/Todos" element={<Todos />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/UserForm" element={<UserForm />} />
                </Routes>
            </div>
        </div>
    );
}