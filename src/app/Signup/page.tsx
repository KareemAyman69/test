import { getAccessToken } from '@auth0/nextjs-auth0';
import { cookies } from "next/headers";
import LoadingSpinner from '../component/loading';
import Signup from '../component/Signup';

export default async function Signuppage() {
    const { accessToken } = await getAccessToken();
    if (accessToken) {
        return <Signup token={accessToken} />;
    }
    else {
        return <LoadingSpinner />;

    }
}