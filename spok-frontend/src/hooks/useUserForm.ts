import React from "react";

export type UserCreatePayload = {
  firstName: string;
  lastName: string;
  email: string;
};

function checkIsFormValid({
  firstName,
  lastName,
  email,
}: UserCreatePayload): boolean {
  return (
    firstName.length >= 2 &&
    lastName.length >= 2 &&
    email.length >= 6 &&
    /\S+@\S+\.\S+/.test(email)
  );
}

export default function useUserForm() {
  const [user, setUser] = React.useState<UserCreatePayload>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const isFormValid = checkIsFormValid(user);
  const change = (prop: string, value: string) => {
    const newUser = { ...user, [prop]: value };
    setUser(newUser);
  };

  return {
    user,
    isFormValid,
    change,
  };
}
