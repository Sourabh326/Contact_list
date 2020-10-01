import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const Contact_list = () => {

const [contactData , setContactData] = useState([]);

useEffect(()=>{
    Axios.get(`https://reqres.in/api/users`)
    .then(res=>{
        console.log(res.data)
        setContactData(res.data.data)
    })
    
},[])
    return (
        <div>
            { contactData.map((row)=>(
                 <div className="contact_box">
                 <div className="row">
                     <div className="col-md-3">
                        <div className="contact_img">
                            <img src={row.avatar} height="60px" width="60px" alt="contact_img"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                         <div className="contact_name d-flex">
                             
                             <h4> {row.first_name} </h4> <h4 className="mx-2"> {row.last_name} </h4>
                         </div>
                         <div className="contact_email">
                             <p> {row.email} </p>
                         </div>
                     </div>
                     <div className="col-md-3">
                         <div className="contact_time">
                             <p> 3:23 PM </p>
                         </div>
                     </div>
                 </div>
                 </div>
            )) }
           
        </div>
    )
}

export default Contact_list
