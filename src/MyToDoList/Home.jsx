import React, { useEffect, useState } from "react";
import Top from './Top';
import {createRandomNumber} from './js/util'

const Home = () => {

    const [imgNo, setImgNo] =useState(100);

    useEffect(()=> {

        setImgNo(createRandomNumber(10, 100));

    })

    return(
        <div className="home">
            <h3>Our Service is TODO-LIST</h3>
            <img src={`https://picsum.photos/id/&{imgNo}/200/300`} alt="" />
            <br />
            <img src={`https://picsum.photos/id/&{imgNo + 1}/200/300`} alt="" />
            <br />
            <img src={`https://picsum.photos/id/&{imgNo +2}/200/300`} alt="" />
            <br />
            <Top />
        </div>
    )
}

export default Home;