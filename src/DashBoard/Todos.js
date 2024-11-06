import { useEffect, useState } from "react"
import ApiInstance from "../config/Apis/ApiInstance"
import FATable from "../Components/FATable"

export default function Todos() {

    const [postData, setPostData] = useState([])
    const [loader, setLoader] = useState(false)

    const getData = () => {
        setLoader(true)
        ApiInstance.get('todos')
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
                            {/* Loader Image */}
                            <img
                                src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif"
                                className="max-w-full h-auto"  // Ensure the image remains responsive and not too large
                            />
                        </div>
                    ) : null}
                </div>
                <div>
                    <FATable
                        data={postData}
                        columns={[
                            {
                                key: 'id',
                                label: 'UserId'
                            },
                            {
                                key: 'title',
                                label: 'Title'
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}