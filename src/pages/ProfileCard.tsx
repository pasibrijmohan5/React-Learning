function ProfileCard() {
    return (
        <div className="p-4 rounded-2xl shadow-lg bg-white w-64 text-center">
            <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-600">Developer</p>
        </div>
    )
}

export default ProfileCard