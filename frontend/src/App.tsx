import { SignInButton, SignOutButton, UserButton } from "@clerk/react";

export default function App() {
  return (
    <header>
      <SignInButton />
      <UserButton />
      <SignOutButton />
    </header>
  )
}