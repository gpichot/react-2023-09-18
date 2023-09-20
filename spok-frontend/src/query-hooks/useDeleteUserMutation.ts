import config from "../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteUserMutation() {
  const queryClient = new useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      await fetch(`${config.apiUrl}/users/${userId}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
