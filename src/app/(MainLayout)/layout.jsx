"use client";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Suspense } from 'react'
import 'aos/dist/aos.css';
// import { useParams, useRouter } from "next/navigation";
const layout = ({ children }) => {
  // const router = useRouter()
  // const params = useParams()
  // console.log(router, params);
  return (
    <div className="bg-bg-color min-h-screen">
      <Header />
      <Suspense fallback={<div className="h-screen mx-auto"><p className="loading loading-infinity loading-lg text-band-orange"></p></div>}>
        {children}
        <Footer />
      </Suspense>
    </div>
  );
};

export default layout;
