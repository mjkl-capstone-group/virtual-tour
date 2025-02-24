export const metadata = {
    title: "404 - Page Not Found",
};

export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="lead">Oops! This place doesn’t exist in our tour.</p>

            <a href="/" className="btn btn-light mt-3">
                Return to Home
            </a>
        </div>
    );
}
