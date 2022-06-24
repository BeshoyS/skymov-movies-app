import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='text-center w-75'>
            <i className="fa fa-heart-broken fa-5x my-5"></i>
            <h1 className='pb-3'>This page is no longer avaliable. back to the previous page or Home Page</h1>
            <div className='d-flex justify-content-center'>
            <button className="btn btn-transparent text-white" onClick={()=> navigate(-1)}><i className="fa fa-arrow-left border rounded-3 p-3 mx-3" aria-hidden="true"></i></button>
            <Link to={'/home'}><i className="fa fa-home border rounded-3 p-3 mx-3" aria-hidden="true"></i></Link>
            </div>
        </div>
        </div>
    )
}
