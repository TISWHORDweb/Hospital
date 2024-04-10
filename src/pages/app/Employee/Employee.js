import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import Table from './Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'
import { Check } from '../../../Utils/Core'

function Employee() {
    const { checkAuth, type } = useContext(MyContext)
    const [employees, setEmployees] = useState(null)

    const Checks = Check()
    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (Checks) {

            const url = `${USER_BASE_URL}/${type}/employee/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setEmployees(response)
                })
                .catch((err) => console.log(err));

        }
    }, [type, Checks]);

    return (
        <div>
            {employees ?
                <Layout>
                    <div className="container">
                        <Modal title=" Create Employee" id="employeeModal" >
                            <ModalDetails />
                        </Modal>
                        <div className=" Patients">
                            <TableHeader title="Employees" />
                            <Table employees={employees} />
                        </div>
                    </div>
                </Layout>
                : <div className="">
                    <Loader />
                </div>
            }
        </div>
    )
}

export default Employee