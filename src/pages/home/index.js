import "./styles.css"
import Cards from "../../library/components/Cards";
import {API_URL} from "../../data/constants";
import FetchAPI from "../../library/network";
import React, {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate'
import {Loading} from "../../library/components";

const Home = (props) => {
    const [dataAPI,setDataAPI] = useState({})
    const [pageNum, setPageNum] = useState(0)
    const [pagePagination, setPagePagination] = useState(1)
    const [loading, setLoading] = useState(true)
    const dataPerPage = dataAPI?.items?.length
    const pageCount = Math.ceil(dataAPI?.total_count / dataPerPage)

    const changePage = (v) => {
        let selected = v.selected;
        setPageNum(selected)
    };

    const getData = async () => {
        setLoading(true)
        FetchAPI(`${API_URL}&page=${pageNum+1}`).then(data=>{
            if (data.success) {
              //  console.log('data--------------',data)
                setDataAPI(data?.data)
                setPagePagination(data?.data?.total_count)
                setLoading(false)
            }
        })
    }
    const displayData = dataAPI?.items?.map((item,index)=>{
        return <Cards
            key={index}
            title={item.full_name}
            description={item.description}
            stars={item.stargazers_count}
            issues={item.open_issues}
            imgOwner={item.owner.avatar_url}
            ownerName={item.owner.login}
        />
    });
    useEffect(() => {
        getData()
    },[pageNum])

    return (
        <div>
            {!loading ?
                <>
                {displayData}
                <div className={"row m-2"}>
                    <ReactPaginate
                        previousLabel={<ion-icon name="arrow-back-circle-outline" size="large"/>}
                        nextLabel={<ion-icon name="arrow-forward-circle-outline" size="large"/>}
                        pageCount={pageCount}
                        forcePage={pageNum}
                        onPageChange={changePage}
                        containerClassName={"pagination  justify-content-end"}
                        nextLinkClassName={"nextbtn"}
                        activeClassName={"active btn-primary p-2 btn-sm"}
                    />
                </div></>:
                <div className="d-flex align-items-center justify-content-center h-100" style={{marginTop: 200}}>
                    <Loading/>
                </div> }
        </div>
    );
}

export default Home;
