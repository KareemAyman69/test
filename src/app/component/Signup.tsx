"use client"
import { useEffect, useState } from 'react';
import Image from "next/image"
import card from "@/app/images/pic.png"
import Navbar from '../component/navbar';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './loading';
interface SignupProps {
    token: string;
}
const Signup: React.FC<SignupProps> = ({ token }) => {
    const { user, error, isLoading } = useUser();
    const router = useRouter()
    const [errortag, setError] = useState("")
    const [loading, setloading] = useState(false)
    const [accessToken, setAccessToken] = useState("")
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
    });
    useEffect(() => {
        if (token) {
            console.log(token)
            setAccessToken(token)
        }
    }, [])
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e: any) => {

        e.preventDefault();
        const userData = {
            name: `${formData.firstName} ${formData.lastName}`,
            phone_number: formData.phone,
            email: user?.email,
            card_number: "79283574823",
            cvv: "232",
            bank_name: "Rak Bank"
        };
        setloading(true)
        try {
            const response = await fetch('https://p2p.rakega.online/auth/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ` + accessToken
                },
                body: JSON.stringify(userData)

            });
            if (!response.ok) {
                const errorJson = await response.json();
                setError(errorJson.error)
            }
            else {
                router.push("/HomePage")
            }
        } catch (error) {
            setError("Error Creating User")
            console.error(error);
        }
        setloading(false)

    };
    if (loading || isLoading) {
        return <LoadingSpinner />;
    }
    return (
        <main className='min-h-screen'>
            <Navbar />
            <div className='bg-[#2F3349]  w-full relative flex'>
                <div className="pt-20 w-1/3 justify-center min-h-screen flex flex-col items-center">
                    <h1 className="text-[#807EFF] text-5xl mb-5 font-bold">NaQdi</h1>
                    <div className="text-white text-2xl pb-20 opacity-80">
                        <h2>Enjoy fast and hassle-free</h2>
                        <h2>transactions for all your needs.</h2>
                    </div>
                    <div>
                        <Image src={card.src} height={350} width={350} alt="logo" />
                    </div>
                </div>

                <div className='w-2/3 flex items-center justify-center mx-20 my-5'>
                    <div className='bg-[#25293C] p-10 rounded-2xl shadow-lg px-20 border border-white'>
                        <h2 className='text-white text-3xl mb-6'>Complete Profile</h2>
                        <form className='space-y-4 text-white' onSubmit={handleSubmit}>
                            <div className='flex space-x-4'>
                                <div className='flex-1'>
                                    <label className='block mb-2'>First Name</label>
                                    <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40]' />
                                </div>
                                <div className='flex-1'>
                                    <label className='block mb-2'>Last Name</label>
                                    <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40]' />
                                </div>
                            </div>
                            <div>
                                <label className=''>Phone Number</label>
                                <input type='text' name='phone' value={formData.phone} onChange={handleChange} className='w-full px-4 py-2 rounded bg-[#2F3349] rounded-2xl border border-[#807EFF40]' />
                            </div>
                            <div className='flex items-center'>
                                <input type='checkbox' className='mr-2' />
                                <label className='text-[#BEBEBE]'>
                                    By creating an account, I agree to our Terms of use and Privacy Policy
                                </label>
                            </div>
                            <div className='flex items-center'>
                                <input type='checkbox' className='mr-2' />
                                <label className='text-[#BEBEBE]'>
                                    By creating an account, I am also consenting to receive SMS
                                    messages and emails, including product new feature updates,
                                    events, and marketing promotions.
                                </label>
                            </div>
                            <p className='text-center text-red-600 text-xl'>{errortag}</p>
                            <div className='flex items-center justify-center space-x-6'>
                                <button type='submit' className='bg-[#807EFF] text-white py-2 px-12 rounded-2xl'>Sign Up</button>
                                <span className=''>Already have an account? <a href='#' className='text-[#807EFF] underline'>Log in</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Signup
