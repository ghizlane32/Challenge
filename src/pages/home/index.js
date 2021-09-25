

import "./styles.css"
import Cards from "../../library/components/Cards";
import {API_URL} from "../../data/constants";
import FetchAPI from "../../library/network";
import {useEffect, useState} from "react";

const Home = (props) => {
    const [dataAPI,setDataAPI] = useState({})

    const getData = async () => {
        FetchAPI(API_URL).then(data=>{
            if (data.success) {
                setDataAPI(data?.data)
                console.log("dataAPI----------",data?.data)
            }
        })
    }

    useEffect(() => {
            getData();
    }, [])

    return (
        <div>
            {dataAPI?.items?.map((item,index)=>{
               return (
                   <Cards
                       key={index}
                       title={item.full_name}
                       description={item.description}
                       stars={item.stargazers_count}
                       issues={item.open_issues}
                       imgOwner={item.owner.avatar_url}
                       ownerName={item.owner.login}
                />
               )
            })}


        </div>
    );
}

export default Home;
