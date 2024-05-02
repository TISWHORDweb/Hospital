import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';

function EditKin({user}) {
    const { token } = useContext(MyContext)
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [work, setWork] = useState("");
    const [relationship, setRelationship] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState()
    const [id, setId] = useState()

    useEffect(() => {
        if (user) {
            setFullName(user.fullName)
            setEmail(user.email)
            setWork(user.work)
            setRelationship(user.relationship)
            setAddress(user.address)
            setPhone(user.phone)
            setId(user._id)
            setGender(user.gender)
        }
    }, [user])

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
        }
    }

    const HandeEditKin = (e) => {
        e.preventDefault()
        if (user) {
            setSpin(true)
            const body = {
                fullName,
                email,
                relationship,
                work,
                gender,
                address,
                phone,
                id
            }

            axios.put(`${USER_BASE_URL}/patient/kin/edit`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
                    }
                }).catch((e) => {
                    console.log(e);
                    setClick(true)
                    setClassName("alert__message error")
                    setMessage("There was an error trying to process your request, Please try again later")
                    setSpin(false)
                    Clearer()
                })
        }
    }
    return (
        <div>
            <div class="modal-body InviteModal ">
                <div class="justify-content-space">
                    <h3 className='mb-3 f20'>Edit Kin</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="E">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Full name</label>  <br />
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='inputts' name="" id="discount" placeholder='John' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Email</label>  <br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputts' name="" id="discount" placeholder='Doe' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Phone number</label>  <br />
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className='inputts' name="" id="discount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Address</label>  <br />
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='inputts' name="" id="discount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Gender</label>  <br />
                        <select class="form-select inputts selectHolder" value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                            <option  ><span>select</span></option>
                            <option value="Male" ><span>Male</span></option>
                            <option value="Female" ><span>Female</span></option>
                            <option value="Other" ><span>Others</span></option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Profession</label>  <br />
                        <input type="date" className='inputts' value={work} name="" id="discount" onChange={(e) => setWork(e.target.value)} placeholder='01-01-1999' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Relationship</label>  <br />
                        <input type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)} className='inputts' name="" id="discount" />
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandeEditKin} class="btnDark  w-100 m-0 f17 " >
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Update kin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditKin