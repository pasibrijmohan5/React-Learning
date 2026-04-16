type StudentProps = {
    name: string;
    age: number;
};
function Students({ name, age }: StudentProps) {
    return (
        <div className="border p-3 mb-2 rounded">
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>

            {age >= 21 ? (
                <p className="text-green-500">Adult</p>
            ) : (
                <p className="text-red-500">Minor</p>
            )}
        </div>
    );
}

export default Students