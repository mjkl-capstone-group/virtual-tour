export default function Loading() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white text-center">
            <h1 className="display-6 mb-3">Leyte Explore</h1>
            <div className="spinner-grow text-primary" role="status"></div>
            <p className="mt-3">Please wait for a moment...</p>
        </div>
    );
}
