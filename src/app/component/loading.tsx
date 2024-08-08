const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#2F3349] ">
            <div className="animate-spin loader ease-linear rounded-full border-4 border-t-4 border-[#807EFF] border-dotted h-10 w-10"></div>
        </div>
    );
};

export default LoadingSpinner;
