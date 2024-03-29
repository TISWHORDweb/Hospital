import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

import Details from './Details'
import Kin from './Kin'
import Overview from './Overview'
import ButtonLink from './ButtonLink'
import Modal from '../../../components/Modal'
import ModalDetails from './ModalDetails'
import LogOut from '../../../components/LogOut'
import { MyContext } from '../../../context/Context';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_BASE_URL } from '../../../Datas/data'
import Loader from '../../../components/Loader'

function Profile() {
    const { checkAuth, type } = useContext(MyContext)
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        const Check = localStorage.getItem('userLoggedIn');
        if (Check === "true") {

            const url = `${USER_BASE_URL}/${type}/details`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setUser(response)
                })
                .catch((err) => console.log(err));
        }
        else {
            navigate('/');
        }
    }, [navigate, type]);

    return (
        <div>
            {user ?
                <Layout>

                    <div className="container">
                        <div className="text-end">
                            <Modal title=" Edit profile" id="profileModal" class="" >
                                <ModalDetails />
                            </Modal>
                        </div>
                        <div className="Profile">
                            <div className="row ">
                                <div className="col-md-5">
                                    <Details user={user} />
                                    <Kin />
                                </div>
                                <div className="col-md-7">
                                    <Overview user={user} />
                                    <ButtonLink />
                                </div>
                            </div>
                        </div>
                        <LogOut />
                        <div className="m50"></div>
                    </div>
                </Layout>
                : <div className="">
                    <Loader />
                </div>
            }
        </div>
    )
}

export default Profile