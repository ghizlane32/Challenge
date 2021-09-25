import './styles.css';

const Cards = (props) => {
    return (
       <div className="card">
            <div className="card-body">
                <div className="d-flex align-content-center flex-wrap">
                    <div>
                        <img className="rounded float-left" style={{width:150,height:150,resizeMode:'contain'}}
                             src="https://avatars.githubusercontent.com/u/1023379?v=4" alt="Card image cap"
                        />
                    </div>
                    <div  className={"p-4"}>
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
                        <div className="row ">
                            <div className="col col-sm-3 ">{props.stars}</div>
                            <div className="col col-sm-3">{props.issues}</div>
                            <div className="col-6 d-flex ">{props.infosSubmit}</div>
                            <div className="d-flex p-1 ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Cards
