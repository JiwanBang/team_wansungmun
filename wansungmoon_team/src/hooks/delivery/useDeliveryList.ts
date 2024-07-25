import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDeliveryList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["list", "get", "delivery"],
    queryFn: async () => {
      try {
        const List = await axios.get("api/delivery/getList", {
          withCredentials: true,
        });

        return List.data;
      } catch (err) {
        console.error(err);
      }
    },
  });
  return { data, isPending };
};

export default useDeliveryList;
