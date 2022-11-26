import {useNavigate, useParams} from "react-router-dom";



const DialogWindow = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go Back </button>
            <h1>{id}</h1>
        </div>
    )
}
export default DialogWindow;


