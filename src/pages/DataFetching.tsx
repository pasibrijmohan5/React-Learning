import axios from "axios"


function DataFetching() {
    const handleSubmit = async () => {
        let result = await axios.get('https://restcountries.com/v3.1/name/nepal')
        console.log(result)
    }

    return (
        <>
            <div>
                <h1 className="w-[100px] h-[10px] p-4 m-4 flex items-center justify-center">API calling</h1>
                <button className="w-[100px] h-[20px] text-white bg-green-400 p-4 m-4 
                 rounded-xl flex items-center justify-center border border-black" onClick={handleSubmit}>Fetch</button>
            </div>
        </>
    )
}

export default DataFetching