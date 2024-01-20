import React, { useState } from 'react'
import Header from '../../Header'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Add = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [file,setFile] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{    
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('image', file);
            let adduser = await axios.post(`http://localhost:8000/add`,formData)
            toast.success("User successfully add");
        }catch(err){
            console.log(err);
            return false;
        }
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-4'>

                    </div>
                    <div className='col-lg-8'>

                        <h3>Add User</h3>
                        <Link to={`/`} className='btn btn-primary mt-3'>View</Link>
                        <div className='mt-5 p-5' style={{boxShadow : '5px 5px 10px 5px gray'}}>
                            <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control" onChange={ (e) => setName(e.target.value) } id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                        <input type="text" className="form-control" onChange={ (e) => setPhone(e.target.value) } id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                                        <input type="file" onChange={ (e) => setFile(e.target.files[0]) } className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Add
