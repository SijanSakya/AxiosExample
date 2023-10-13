"use client";
import HeroSection from "@/components/HeroSection";
import FirstRequest from "@/components/axios/FirstRequest";
import FetchData from "@/components/axios/fetchData";
import GlobalInstance from "@/components/axios/globalInstance";
// import '../axios/global' ;
import Image from "next/image";
import CustomInstance from "@/components/axios/customInstance";
import CustomInstanceIds from "@/components/axios/customInstanceIds";

export default function Home() {
	return (
		<div>
			{/* <HeroSection />
    <FirstRequest />
    <FetchData /> */}
			{/* <GlobalInstance /> */}
			{/* <CustomInstance /> */}
			<div className="w-full items-center mt-5 justify-center">
				<p className="text-center">
					######### Here is an example of reusable hook for api call #######
				</p>
				<CustomInstanceIds />
			</div>
		</div>
	);
}
