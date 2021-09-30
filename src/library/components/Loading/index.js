import './styles.css';

const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center mt-lg-11">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loading
