import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Lost from "@/images/404.webp";

const NotFound = () => {

    const heading = "STORE";

    return (

        <>

            <Header heading={heading}/>

            <main className="not-found d-flex flex-column align-items-center py-5 px-4">

                <Link className="py-5" href="/">
                
                    Return

                </Link>

                <Image className="mb-5" src={Lost} alt="Finance" width="360" height="360"/>

            </main>

            <Footer/>
        
        </>

    );
};

export default NotFound;