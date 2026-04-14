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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        alert("Submitted!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">

            {/* Form Card */}
            <div className="bg-gray-100 w-[420px] p-8 rounded-xl shadow-md">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Registration Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-300 rounded-md outline-none"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-300 rounded-md outline-none"
                    />

                    {/* Phone */}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone*"
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-300 rounded-md outline-none"
                    />

                    {/* Subject Dropdown */}
                    <select
                        name="subject"
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-300 rounded-md outline-none"
                    >
                        <option value="">Subject*</option>
                        <option value="general">General</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                    </select>

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Message*"
                        rows={3}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-300 rounded-md outline-none"
                    />

                    {/* Button */}
                    <div className="flex justify-center pt-2">
                        <button
                            type="submit"
                            className="bg-teal-700 text-white px-8 py-2 rounded-md hover:bg-teal-800"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default App;