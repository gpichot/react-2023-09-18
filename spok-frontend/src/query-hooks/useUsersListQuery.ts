import { useQuery } from "@tanstack/react-query";
import config from "../config";

type UseUsersListQueryOptions = {
  page: number;
};

export default function useUsersListQuery({ page }: UseUsersListQueryOptions) {
  const limit = 4;
  return useQuery({
    queryKey: ["users", { page }],
    queryFn: async () => {
      const response = await fetch(
        `${config.apiUrl}/users/?page=${page}&limit=${limit}`
      );
      const users = await response.json();
      const count = response.headers.get("x-total-count");
      return { users, count, limit };
    },
  });
}
