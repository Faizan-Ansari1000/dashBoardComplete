import { useEffect, useState } from "react"
import ApiInstance from "../config/Apis/ApiInstance";
import FATable from "../Components/FATable";
import ApiInstance2 from "../config/Apis/ApiInstance";

export default function Photos() {

    const [postData, setPostData] = useState([]);
    const [loader, setLoader] = useState(false)

    const getData = () => {
        setLoader(true)
        ApiInstance.get('users')
            .then((res) => {
                console.log(res.data)
                setPostData([...res.data])
                setLoader(false)
            })
            .catch((err) => {
                console.log(err, 'err')
            })
    }

    useEffect(() => {
        getData();
    }, [])

        return (
            <>
                <div>
                    <div>
                    {loader ? (
                            <div className="flex justify-center items-start fixed top-0 left-0 right-0 bg-white">

                                <img
                                    src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif"
                                    className="max-w-full h-auto"  
                                />
                            </div>
                        ) : null}
                    </div>
                    <div className="h-screen">
                        <div className="flex flex-wrap justify-center">
                            {postData.map((x, i) => (
                                <div key={i} className="border rounded-sm p-4 m-1 w-[300px] relative justify-center">

                                    <img
                                        src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
                                        alt="User"
                                        className="object-cover w-[60px] h-[60px] rounded-full absolute top-2 left-2" 
                                    />

                                    <img
                                        src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
                                        alt="Post"
                                        className="object-cover w-full h-[200px] rounded-md mt-16" 
                                    />

                                    <p className="mt-4"><b>Title:</b> {x.title}</p>

                                    <p className="mt-2">This is a description of the post or content.</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </>
        )
    }


    