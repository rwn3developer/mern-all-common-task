import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const View = () => {

    const [record, setRecord] = useState([]);

    const getAllRecord = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/view`);
            setRecord(data.record);
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const deleteData = async (id) => {
        try {
            let { data } = await axios.delete(`http://localhost:8000/delete/${id}`);
            toast.error("Record delete");
            getAllRecord();
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getAllRecord();
    }, [])


    return (
        <div>
            <Header />

            <div className='container'>
                <div className='row p-5'>
                    <div className='col-lg-4'>

                    </div>
                    <div className='col-lg-8'>

                        <h3>View User</h3>
                        <Link to={`/add`} className='btn btn-primary mt-3'>Add</Link>
                        <div className='mt-5'>
                            <table className="table">
                                <thead className="table-primary">
                                    <tr>
                                        <th>Srno</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        record.map((val, i) => {
                                            i = i + 1
                                            return (
                                                <tr key={i}>
                                                    <td>{i}</td>
                                                    <td>{val.name}</td>
                                                    <td>{val.phone}</td>
                                                    <td>
                                                        <img src={val.image.url} width='100' />
                                                    </td>
                                                    <td>
                                                        <button onClick={() => deleteData(val._id)} className='btn btn-danger btn-sm'>Delete</button>
                                                        <Link to={`edit/${val._id}`}>
                                                            <button  className='btn btn-primary btn-sm ms-3'>Edit</button>
                                                        </Link>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default View
