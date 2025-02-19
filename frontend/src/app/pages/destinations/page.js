import Header from "@/components/header";
import Footer from "@/components/footer";

const TestPage = () => {
    return (
        <>
            <Header />
            <h1
                className="text-center"
                style={{ height: '90vh' }}
            >
                Hello, World!
            </h1>
            <Footer />
        </>
    );
};

export default TestPage;
