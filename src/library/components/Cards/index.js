import './styles.css';

const Cards = (props) => {
    return (
        <div className={`my-4 overflow-hidden p-4 rounded-3 shadow-card ${props?.className ? props.className : ""}`} >
            {props?.children}
        </div>
    );
}

export default Cards