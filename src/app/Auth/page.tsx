"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import LoadingSpinner from "../component/loading";

export default function Auth() {
  const router = useRouter();
  console.log("process.env.AUTH0_CLIENT_ID")
  console.log(process.env.AUTH0_CLIENT_ID)
  const { user, error, isLoading } = useUser();
  if (user) {
    router.push("/Signup")
  }
  if (error) {
    router.push("/")
  }
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#2F3349] to-black text-white overflow-hidden">
      {/* Content */}
      <div className="relative flex flex-col items-center space-y-8 p-10 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg z-10">
        <h1 className="text-4xl font-bold">Welcome to Naqdi</h1>
        <Link
          className="transform hover:scale-105 text-white font-semibold py-4 px-12 rounded-lg shadow-md bg-[#807EFF]"
          href={"/api/auth/login"}
        >
          Enter
        </Link>
      </div>
    </main>
  );
}