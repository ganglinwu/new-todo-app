import { SetStateAction, useState } from "react";

type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
};

export default function LoginPage({ setIsLoggedIn }: LoginPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  return (
    <form>
      <input
        type="text"
        required
        name="username"
        id="username"
        value={userNameInput}
        onChange={(e) => {
          setUserNameInput(e.target.value);
        }}
      />
      <label htmlFor="username">User name</label>
      <input
        type="password"
        required
        name="password"
        id="password"
        value={passwordInput}
        onChange={(e) => {
          setPasswordInput(e.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <button
        type="submit"
        disabled={isSubmitting}
        onClick={(e) => {
          e.preventDefault();
          setIsSubmitting(true);
          try {
            fetch("http://localhost:3001/login", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userName: userNameInput,
                password: passwordInput,
              }),
            }).then((res) => {
              if (res.ok) {
                alert("Login successful");
                setIsLoggedIn(true);
                setIsSubmitting(false);
              } else {
                alert("Login unsuccessful, please check and try again");
                setIsSubmitting(false);
              }
            });
          } catch (error) {
            console.error(error);
            alert("Something went wrong, please try again");
            setIsSubmitting(false);
          }
        }}
      >{`${isSubmitting ? "Submitting" : "Submit"}`}</button>
    </form>
  );
}
