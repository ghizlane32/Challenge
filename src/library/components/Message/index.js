import './styles.css';

const NotFound404 = (props) => {
    return (
        <div className="NotFound404 d-flex flex-column align-items-center justify-content-center mt-lg-11">
            <img src={props?.icon} alt="" />
            <h4>{props?.title || "Page not Available"}</h4>
            <p className="fw-100">{props?.message || "Please check the access URL "}</p>
        </div>
    );
}

export default NotFound404
