export default function Row({ children }) {
    return (
        <div className="flex flex-row space-x-6">
            {children}
        </div>
    );
}
