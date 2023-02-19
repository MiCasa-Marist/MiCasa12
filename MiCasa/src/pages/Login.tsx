import { FunctionComponent } from "react";
import { LoginForm } from "../components";

export const Login: FunctionComponent = () => {
  return (
    <LoginForm
      onLogin={function (username: string, password: string): void {
        throw new Error("Missing username or password or both!");
      }}
    />
  );
};
