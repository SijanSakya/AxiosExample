import authFetch from "@/axios/custom";
import { CustomProp } from "@/components/axios/customInstance";
import { useEffect, useState } from "react";

export const useAxios = ({ route = "", otherOptions = "" }) => {
	const [data, setData] = useState<CustomProp[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const res = await authFetch(route);
			setData(res.data);
			setIsLoading(false);
		} catch (error: any) {
			setError(error.response?.message as string);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		if (route) {
			fetchData();
		}
	}, [route]);

	return { data, isLoading, error };
};
