import { Button } from "antd"

export default function FAButton(props) {
    
    const {label, className, onClick} = props;

    return (
        <>
            <div>
                <Button onClick={onClick}
                    className={className}
                >{label}</Button>
            </div>
        </>
    )
}