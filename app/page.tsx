import Carousel from "@/components/carousel";
import Cards from "@/components/cards";
import Header from "@/components/header";
import Link from "next/link";

const Home = () => {

  return (

    <>

      <Header heading="HOME">

        <div className="col-12 bg-11 p-4 p-sm-5 ps-md-5 pt-md-5 pb-md-5 pe-md-0 pe-xl-5">

          <div className="row align-items-center justify-content-between g-0">

            <div className="col-12 col-md-7 col-xl-5">

              <p className="p-4 p-xxl-5">

                <span className="d-flex row align-items-center justify-content-between g-0">

                  <span className="col-11 col-lg-9 p-2 ps-sm-0">

                    Ut enim ad ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

                  </span>

                  <Link href="/store" className="col-auto align-self-lg-end border rounded mt-4 mb-3 px-2 py-1">

                    store

                  </Link>

                </span>

              </p>

            </div>

            <Carousel />

          </div>

        </div>

      </Header>

      <main className="d-flex flex-column">

        <Cards

          heading={`Vestibulum eu`}
          link={true}

        />

      </main>

    </>

  );
};

export default Home;