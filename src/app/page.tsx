"use client";
import HeroSection from "@/components/HeroSection";
import FirstRequest from "@/components/axios/FirstRequest";
import FetchData from "@/components/axios/fetchData";
import Image from "next/image";
import CustomInstance from "@/components/axios/customInstance";
import CustomInstanceIds from "@/components/axios/customInstanceIds";
import Interceptors from "@/components/axios/Interceptor";
import InterceptorId from "@/components/axios/interceptorId";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <FirstRequest />
    <FetchData /> */}
      {/* <div className="w-full items-center mt-5 justify-center">
				<p className="text-center">
					######### Here is an example of reusable hook for api call #######
				</p>
				<CustomInstanceIds id={undefined} name={""} price={0} />
				<Interceptors />
				<InterceptorId />
			</div> */}
    </div>
  );
}
