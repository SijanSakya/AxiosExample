"use cLient";
import { useAxios } from "@/hooks/useAxios";

export interface CustomProp {
	id: any;
	name: string;
	price: number;
}
const CustomInstanceIds: React.FC<CustomProp> = () => {
	const { data, isLoading, error } = useAxios({
		route: "/react-prop-types-example",
	});

	if (isLoading) {
		return (
			<div className="w-full flex items-center justify-center">
				Loading........
			</div>
		);
	}
	return (
		<div>
			<h2 className="text-center">custom instance Ids</h2>
			{data.length > 0 ? (
				data.map((post: any) => (
					<div key={post.id} className="flex gap-10 justify-center">
						<h1>{post.id}</h1>
						<p>{post.price}</p>
					</div>
				))
			) : (
				<>{error && <p className="text-red-500">{error}</p>}</>
			)}
		</div>
	);
};
export default CustomInstanceIds;
