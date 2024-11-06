
import { useNavigate } from "react-router-dom";
import FAButton from "./FAButton";
import FAScreenHeader from "./FAScreenHeader";

export default function FATable(props) {
    const { columns, data } = props;

    return (
        <>
            
            <div className="overflow-x-auto text-start">
                <table className="min-w-full">
                    <thead className="bg-black text-white">
                        <tr>
                            {columns.map((x, i) => (
                                <th className="p-2 text-left" key={i}>{x.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((x, i) => (
                            <tr key={i}>
                                {columns.map((col, colInd) => (
                                    <td className="p-2 border-b" key={colInd}>
                                        {x[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
