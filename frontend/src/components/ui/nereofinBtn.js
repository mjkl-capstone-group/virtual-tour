import Image from "next/image";
import assetsURL from "@/utils/supabase-assets";

const FixedButton = () => {
    return (
        <button className="fixed-button d-flex align-items-center justify-content-center" onClick={() => alert("Para po 2 sa AI!")}>
            <Image
                src={`${assetsURL.others}nerofin.png`}
                width={100}
                height={100}
                alt="nerofinAI"
                className="rounded-circle"
            />
        </button >
    );
};

export default FixedButton;
