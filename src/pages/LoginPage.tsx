import { SetStateAction, useState } from "react";

type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
};

export default function LoginPage({ setIsLoggedIn }: LoginPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <form method="POST" action="http://localhost:3001/login">
      <input type="text" required name="userName" id="userName" />
      <label htmlFor="userName">Username</label>
      <input type="password" required name="password" id="password" />
      <label htmlFor="password">Password</label>
      <button
        type="submit"
        disabled={isSubmitting}
        onClick={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          let xhr = new XMLHttpRequest();
          xhr.open("POST", "http://localhost:3001/login");
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.setRequestHeader("Charset", "utf-8");
          xhr.send(
            JSON.stringify({
              userName: "testuser",
              password: "plaintext",
            }),
          );
          xhr.onload = () => {
            if (xhr.status === 200) {
              alert("Login successful");
              setIsLoggedIn(true);
            } else {
              alert("Login unsucessful");
            }
            setIsSubmitting(false);
          };
        }}
      >{`${isSubmitting ? "Submitting" : "Submit"}`}</button>
    </form>
  );
}
