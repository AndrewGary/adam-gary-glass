

const AdminDashboard = ({ user }) => {

    console.log('user: ', user);

    return(
        <div className="flex flex-col items-center h-screen">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"></h2>
            <h1 className="my-3 text-center text-3xl font-extrabold text-gray-900">Welcom back</h1>
            <h2 className="my-3 text-center text-xl font-extrabold text-gray-900">What would you like to do?</h2>
            <a className="my-2 bg-gray-300" href='/addnewproduct'>
                <button className="border border-gray-300 hover:border-gray-500 py-4 w-60">Add New Product</button>
                {/* <button className="border border-gray-300 hover:border-gray-500 py-4 px-8">Add New Product</button> */}
            </a>

            <a className="my-2 bg-gray-300" href='/addnewproduct'>
                <button className="border border-gray-300 hover:border-gray-500 py-4 w-60">Edit Products</button>
            </a>
        </div>
    )
}

export default AdminDashboard;