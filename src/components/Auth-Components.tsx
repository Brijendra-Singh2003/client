import { signinAction, signoutAction } from "@/actions/lib";
import React from "react";

export function SignIn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <form action={signinAction}>
      <button {...props}>Sign In</button>
    </form>
  );
}

export function SignOut(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <form action={signoutAction}>
      <button {...props}>Sign Out</button>
    </form>
  );
}
