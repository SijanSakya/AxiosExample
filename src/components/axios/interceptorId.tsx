import React from 'react'
// import { useAxiosInter } from "@/hooks/useAxiosIntercepter";
import { useAxiosMulti } from "@/hooks/useAxiosMulti";

export interface CustomProp {
	id: any;
	name: string;
	price: number;
}
const InterceptorId = () => {
    const { data, loading, error } = useAxiosMulti({
		route: "/react-store-products",
	});

    if (loading) {
		return (
			<div className="w-full flex items-center justify-center">
				Loading........
			</div>
		);
	} else if(error){
		return(
			<div className="w-full flex items-center justify-center">
				Error...........
			</div>
		)
	}
  return (
    
        <div>
			<h2 className="text-center">Interceptor using custom hooks Ids</h2>
			{
				data.map((post: any) => (
					<div key={post.id} className="flex gap-10 justify-center">
						<h1>{post.id}</h1>
						<p>{post.price}</p>
					</div>
				))
			}
		</div>
    
  )
}

export default InterceptorId