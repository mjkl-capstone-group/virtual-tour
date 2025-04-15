import Image from 'next/image';
import assetsURL from '@/utils/supabase-assets';

export const metadata = {
    title: "404 - Page Not Found",
};

export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-white text-center"
            style={{ backgroundColor: "var(--secondary-color)" }}
        >
            <h1 className="display-1 fw-bold mb-0">404</h1>
            <Image
                className='mt-0'
                src={`${assetsURL.others}giphy.gif`}
                alt="404 error GIF"
                unoptimized
                width={150}
                height={150}
            />
            <p className="lead">This is not the page you are looking for.</p>

            <a href="/" className="btn btn-light mt-3">
                Return to Home
            </a>
        </div>
    );
}
