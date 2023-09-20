import { useMutation } from "@tanstack/react-query";

export default function useCreateUserMutation() {
  return useMutation({
    mutationFn: async (userCreatePayload) => {
      await fetch("https://spok-backend.fly.dev/users/", {
        method: "POST",
        body: JSON.stringify(userCreatePayload),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
}
