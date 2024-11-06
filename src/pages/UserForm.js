import { Input } from "antd";
import { useState } from "react";
import FAButton from "../Components/FAButton";
import ApiInstance from "../config/Apis/ApiInstance";
import FATable from "../Components/FATable";

export default function UserForm() {
    const [model, setModel] = useState({});
    const [postData, setPostData] = useState([]);

    const save = () => {
        console.log(model);
        ApiInstance.post('posts', {
            data: model
        })
            .then((res) => {
                console.log(res, 'send');
                setPostData([...postData, model]);
            })
            .catch((err) => {
                console.log(err, 'error');
            });
    };

    return (
        <>
            <div className="h-screen">
                <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg space-y-6 m-2">
                    <h1 className="text-center text-2xl font-bold">UserForm</h1>
                    <div className="space-y-4">
                        <div>
                            <Input
                                placeholder="Name"
                                onChange={(e) => setModel({ ...model, firstName: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4"
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Email"
                                onChange={(e) => setModel({ ...model, email: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4"
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Contact"
                                onChange={(e) => setModel({ ...model, phone: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4"
                            />
                        </div>
                    </div>
                    <div>
                        <FAButton
                            label="Save"
                            onClick={save}
                            className="w-full bg-cyan-600 text-white p-3 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border-collapse shadow-lg rounded-lg overflow-hidden">
                        <thead className="bg-purple-800 text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {postData.map((x, i) => (
                                <tr
                                    key={i}
                                    className={`border-t bg-white hover:bg-yellow-300`}
                                >
                                    <td className="py-3 px-6">{x.firstName}</td>
                                    <td className="py-3 px-6">{x.email}</td>
                                    <td className="py-3 px-6">{x.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
