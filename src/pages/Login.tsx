import { useState } from "react";

function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-teal-500">
            <div className="bg-gray-200 p-6 rounded-lg w-80">

                <h2 className="text-xl font-bold text-center mb-4">
                    Registration Form
                </h2>

                <input
                    name="name"
                    placeholder="Name*"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 bg-gray-300 rounded"
                />

                <input
                    name="email"
                    placeholder="Email*"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 bg-gray-300 rounded"
                />

                <input
                    name="phone"
                    placeholder="Phone*"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 bg-gray-300 rounded"
                />

                <select
                    name="subject"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 bg-gray-300 rounded"
                >
                    <option>Subject*</option>
                    <option>General</option>
                    <option>Support</option>
                </select>

                <textarea
                    name="message"
                    placeholder="Message*"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 bg-gray-300 rounded"
                />

                <button className="w-full bg-teal-700 text-white p-2 rounded">
                    Submit
                </button>

            </div>
        </div>
    );
}

export default App;