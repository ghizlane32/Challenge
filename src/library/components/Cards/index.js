import './styles.css';

const Cards = (props) => {
    return (
       <div className="card rounded-0">
            <div className="card-body">
                <div className="d-flex align-content-center">
                    <div>
                        <img className="rounded float-left" style={{width:130,height:130,resizeMode:'contain'}}
                             src={props.imgOwner} alt="Card image cap"
                        />
                    </div>
                    <div  className={"p-4"}>
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
                        <div className="d-flex align-content-center align-items-center flex-wrap ">
                            <div className="p-1"><span className="badge badge-default badge-outlined text-dark">{`Stars : ${props.stars}k`}</span></div>
                            <div className="p-1"><span className="badge badge-default badge-outlined text-dark">{`Issues : ${props.issues}k`}</span></div>
                            <div className="p-1">{`Submitted 30 days ago by ${props.ownerName}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Cards
