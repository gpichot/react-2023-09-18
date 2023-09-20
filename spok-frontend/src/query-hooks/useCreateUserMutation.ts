import { useMutation } from "@tanstack/react-query";

export type UserCreatePayload = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function useCreateUserMutation() {
  return useMutation({
    mutationFn: async (userCreatePayload: UserCreatePayload) => {
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
