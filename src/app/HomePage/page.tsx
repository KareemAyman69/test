"use client"
import { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
export default function Home() {
    const transactions = [
        {
            name: 'Stripe',
            type: 'Send',
            date: '27/01/2024',
            time: '02:00 AM',
            invoiceId: 'ADX08125',
            fee: '$0,00',
            balance: '+$300',
            status: 'Success'
        },
        {
            name: 'Stripe',
            type: 'Send',
            date: '27/01/2024',
            time: '02:00 AM',
            invoiceId: 'ADX08125',
            fee: '$0,00',
            balance: '+$300',
            status: 'Pending'
        },
        {
            name: 'Stripe',
            type: 'Send',
            date: '27/01/2024',
            time: '02:00 AM',
            invoiceId: 'ADX08125',
            fee: '$0,00',
            balance: '+$300',
            status: 'Failed'
        },]
    return (
        <main>
            <Navbar />
            <div className='bg-[#2F3349] min-h-screen w-full relative flex flex-col items-center justify-center space-y-2'>
                <div className="w-full p-4">
                    <div className="bg-gradient-to-l from-white/60 to-[#807EFF]/60 w-full rounded-lg p-6 flex justify-between items-center">
                        <div className='mx-5'>
                            <h1 className="text-lg font-bold text-white">Kareem@naqdi</h1>
                            <p className="text-sm text-[#2F3349]">CHECKING XXXX0337</p>
                        </div>
                        <button className="bg-white text-[#2F3349] font-semibold py-2 px-4 rounded">
                            Check Balance
                        </button>
                    </div>
                </div>
                <div className="w-2/3 p-4 flex justify-between items-center px-15">
                    <button className="bg-transparent text-white border border-white py-5 px-20 rounded-2xl hover:bg-[#807EFF] hover:border-[#807EFF]">
                        Top up
                    </button>
                    <button className="bg-transparent text-white border border-white py-5 px-20 rounded-2xl hover:bg-[#807EFF] hover:border-[#807EFF]">
                        Transfer
                    </button>
                    <button className="bg-transparent text-white border border-white py-5 px-20 rounded-2xl hover:bg-[#807EFF] hover:border-[#807EFF]">
                        Withdraw
                    </button>
                </div>
                <div className="w-2/3 p-4 bg-white rounded-2xl">
                    <div className="text-left p-4">
                        <h2 className="text-2xl font-semibold text-[#807EFF]">Transactions</h2>
                        <p className="text-gray-500">Send and Receive Transactions Table List.</p>
                        <div className="flex mt-4 space-x-0">
                            <button className="px-6 py-2 text-[#807EFF] bg-white border border-[#807EFF] hover:bg-[#807EFF] hover:text-white">All</button>
                            <button className="px-6 py-2 text-[#807EFF] bg-white border border-[#807EFF] hover:bg-[#807EFF] hover:text-white">Sent</button>
                            <button className="px-6 py-2 text-[#807EFF] bg-white border border-[#807EFF] hover:bg-[#807EFF] hover:text-white">Receive</button>
                        </div>
                    </div>

                    <div className="mt-4 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-[#807EFF]">
                                    <th className="px-4 py-2 text-left ">Name/Business</th>
                                    <th className="px-4 py-2 text-left ">Date</th>
                                    <th className="px-4 py-2 text-left ">Invoice ID</th>
                                    <th className="px-4 py-2 text-left ">Fee</th>
                                    <th className="px-4 py-2 text-left ">Balance</th>
                                    <th className="px-4 py-2 text-left ">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, i) => (
                                    <tr key={i} className="border-b hover:bg-gray-100">
                                        <td className="px-4 py-2">
                                            Stripe <span className="block text-sm text-gray-500">{transaction.type}</span>
                                        </td>
                                        <td className="px-4 py-2">
                                            {transaction.date}
                                            <span className="block text-sm text-gray-500">{transaction.time}</span>
                                        </td>
                                        <td className="px-4 py-2">{transaction.invoiceId}</td>
                                        <td className="px-4 py-2">{transaction.fee}</td>
                                        <td className="px-4 py-2 text-green-600">{transaction.balance}</td>
                                        <td className="px-4 py-2">
                                            <span
                                                className={`inline-block px-4 py-2 text-sm font-semibold rounded-full w-24 text-center border ${transaction.status === 'Pending'
                                                    ? 'bg-yellow-100 border-yellow-500 text-yellow-500'
                                                    : transaction.status === 'Failed'
                                                        ? 'bg-red-100 border-red-500 text-red-500'
                                                        : 'bg-green-100 border-green-500 text-green-500'
                                                    }`}
                                            >
                                                {transaction.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </main>

    );
}
