import { useQuery } from "@tanstack/react-query";

type UseUsersListQueryOptions = {
  page: number;
};

export default function useUsersListQuery({ page }: UseUsersListQueryOptions) {
  return useQuery({
    queryKey: ["users", { page }],
    queryFn: async () => {
      const response = await fetch(
        `https://spok-backend.fly.dev/users/?page=${page}&limit=1`
      );
      const users = await response.json();
      const count = response.headers.get("x-total-count");
      return { users, count };
    },
  });
}
