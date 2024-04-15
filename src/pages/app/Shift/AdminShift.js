import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'
import Card3 from '../../../components/Card3'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'

function AdminShift() {

    const { checkAuth, type } = useContext(MyContext)
    const [shift, setShift] = useState(null)


    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));

        if (data) {
            const url = `${USER_BASE_URL}/employee/shift/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setShift(response)
                })
                .catch((err) => console.log(err));
        }

    }, [type]);
    return (
        <div>
            {shift ?
                <Layout>
                    <div className="container">
                        <Modal title=" Create Shift" id="shiftModal" >
                            <ModalDetails />
                        </Modal>
                        <div className=" Patients">
                            <TableHeader title="Shift" />
                            <div className="mt-3">
                                <div className="row">
                                    {shift.map((each, i) => (
                                        <div className="col-md-6 mb-3" key={i}>
                                            <Card3
                                                data={each}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                : <Loader />}
        </div>
    )
}

export default AdminShift