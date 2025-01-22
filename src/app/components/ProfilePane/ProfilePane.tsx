import { useAtom } from 'jotai';
import { ProfileSlidingPane, CustomerMobileNumber, UserResponse } from '../../store/Homepage/HomepageAtom';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import style from "./ProfilePane.module.css"
import Image from 'next/image'
import { doPostRaw } from "../../store/api"
import { location } from "../../store/locations"
import React, { useState, useEffect } from "react";

const Counter: React.FC = (props) => {
    const [sendOTP, setsendOTP] = useState<any>(false)
    const [inputOtp, setinputOtp] = useState<any>('')
    const [profilePaneState, setProfileSlidingPane] = useAtom<any>(ProfileSlidingPane);
    const [customerMobileNumber, setCustomerMobileNumber] = useAtom<any>(CustomerMobileNumber);
    const [UserResponseState, setUserResponseState] = useAtom<any>(UserResponse);
    const [showProfile, setshowProfile] = useState<any>(false)
    /*console.log("here is token",customerMobileNumber,sendOTP)*/

    const getLocalStorage = async (key: any) => {
        return await localStorage.getItem(key);
    }

    useEffect(() => {
        getLocalStorage('userDetails').then((data: any) => {
            console.log(JSON.parse(data))
            if (JSON.parse(data)) {
                setshowProfile(true)
                setUserResponseState(JSON.parse(data))
            }
        }).catch((error) => {

        });
    }, [])


    const handlePhoneNumberChange = (e: any) => {
        const { name, value } = e.target
        // @ts-ignore
        setCustomerMobileNumber(value)
    }

    const handleLoginClick = async (e: any) => {
        const resp = await doPostRaw(location.VERIFYOTP, {}, { phoneNumber: customerMobileNumber, otp: inputOtp }, undefined)
        setUserResponseState(resp)
        if (resp?.token) {
            setshowProfile(true)
            await localStorage.setItem('userDetails', JSON.stringify(resp));
        }
    }
    return (
        <div>
            <SlidingPane
                className={style.Profilesidemodalcustomclass}
                overlayClassName={style.Profilesidemodalcustomoverlayclass}
                isOpen={profilePaneState}
                hideHeader={true}
                width='30%'
                onRequestClose={() => {
                    // @ts-ignore
                    setProfileSlidingPane(false)
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    {showProfile ? <div> login Profile </div> : <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia minus
                        quis blanditiis nostrum tenetur, ipsam reprehenderit nobis sint deleniti,
                        <div style={{ background: '#967777c8', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '40px', borderRadius: '8px' }}>
                            <h5 style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>Login</h5>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                            <Image
                                src="/login/Toys_Logo_gif.gif"
                                width={120}
                                height={120}
                                alt="Picture of the author"
                            />

                        </div>
                        <div className={style.commonInputMainContainer}>
                            <p className={style.commonInputLabel}> Mobile Number</p>
                            <input className={style.commonInputinput} onChange={handlePhoneNumberChange} value={customerMobileNumber} type="text" placeholder="Enter your mobile Number" />
                        </div>
                        {sendOTP &&
                            <div>
                                <div>
                                    <div className={style.commonInputMainContainer}>
                                        <p className={style.commonInputLabel}> Enter OTP</p>
                                        <input value={inputOtp} onChange={(e: any) => { setinputOtp(e.target.value) }} className={style.commonInputinput} type="text" placeholder="Enter OTP" />
                                    </div>
                                    <div style={{ marginTop: '12px', width: '100%', height: '14px', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '12px', color: 'grey' }}>Resend OTP</p>
                                        <p style={{ fontSize: '12px', color: 'grey' }}>00:00</p>
                                    </div>
                                </div>
                                <div onClick={handleLoginClick} style={{ border: '1px solid #334960', background: '#334960', marginTop: '36px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px' }}>
                                    <p style={{ color: 'white' }}>Login</p>

                                </div>
                            </div>}
                        {!sendOTP && <div onClick={async () => {
                            setsendOTP(true)
                            await doPostRaw(location.USERLOGIN, {}, { phoneNumber: customerMobileNumber }, undefined)

                        }} style={{ border: '1px solid #334960', background: '#334960', marginTop: '36px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px' }}>
                            <p style={{ color: 'white' }}>Send OTP</p>
                        </div>}
                    </div>}
                </div>


            </SlidingPane>

        </div>
    );
};

export default Counter;