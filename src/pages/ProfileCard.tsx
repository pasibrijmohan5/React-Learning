type Props = {
    name: string;
    role: string;
    image: string;
    isOnline: boolean;
};
function ProfileCard({ name, role, image, isOnline }: Props) {
    return (
        <div className="p-2 rounded-4xl shadow-lg bg-white w-70 text-center">
            <img
                src={image}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{role}</p>
            <div
                className={`mt-2 px-3 py-1 text-white rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"
                    }`}
            >
                {isOnline ? "Online" : "Offline"}
            </div>
        </div>
    )
}

export default ProfileCard