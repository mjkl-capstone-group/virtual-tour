import Link from 'next/link';

const Button = () => {
    return (
        <button className="btn btn-dark">
            Virtual Tour
        </button>
    );
};

const DestinationsButton = ({ href }) => {
    return (
        <Link href={href} legacyBehavior>
            <a className="btn btn-dark" style={{ width: "200px" }}>Virtual Tour</a>
        </Link>
    );
};

export { Button, DestinationsButton };
