import React from 'react'
import SessionExpireModal from '../components/SessionExpireModal'
import { Check } from '../Utils/Core'
import { useNavigate } from 'react-router-dom'

function Loader() {
    const navigate = useNavigate()

    const Checks = Check()

    let documentLoaded = false;
    const timeout = 10000; // 60 seconds

    document.addEventListener('DOMContentLoaded', () => {
        documentLoaded = true;
    });

    if (Checks === null || Checks === undefined) {
        setTimeout(() => {
            if (!documentLoaded) {
                navigate('/')
            }
        }, timeout);

    }

    return (
        <div>
            {Checks === "false" ? <SessionExpireModal /> :
                    <div className='loadWrapper m-5'>
                        <div className="loader">
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Loader