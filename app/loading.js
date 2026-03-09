export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="animate-spin h-12 w-12 border-b-2 border-blue-500 rounded-full" />
            <p className="mt-4">Preparing location detection... in main lodaing</p>
        </div>
    );
}