import React from 'react'
import Contact_list from "./Contact_list";

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="main d-flex justify-content-center align-itme-center">
                    <div className="contact">
                        {/* contact filter */}
                        <div className="contact-filter row">
                        <div className="contact_select col-md-6">
                            <select>
                                <option>All</option>
                            </select>
                        </div>
                        <div className="contact_search col-md-6 d-flex">
                            <input type="text"/><i style={{color:'#fff',marginTop:'14px',marginLeft:'10px'}} class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        </div>
                        {/* contact box */}
                        <Contact_list />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
