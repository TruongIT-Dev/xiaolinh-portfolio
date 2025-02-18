
const Unavaiable = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <img
                src="/gifs/gif-4.gif"
                alt="Error illustration"
                className="w-80 h-60 object-cover rounded-lg shadow-lg"
            />
            <h1 className="mt-6 text-3xl font-bold text-red-600">Oops! Hình như trang chưa có</h1>
            <p className="mt-2 text-gray-600 text-center text-xl max-w-md">
                Trang web còn đang tình trạng sữa chữa BUG. Please wait for bất ngờ!.
            </p>
            <button
                onClick={() => window.location.href = '/'}
                className="mt-6 px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                Quay về Trang chủ
            </button>
        </div>
    );
};
export default Unavaiable;