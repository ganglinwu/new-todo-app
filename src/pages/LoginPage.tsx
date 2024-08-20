import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { login } = useContext(UserContext);

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
            login(userNameInput, passwordInput);
          } catch (error) {
            console.error(error);
            alert("Something went wrong, please try again");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >{`${isSubmitting ? "Submitting" : "Submit"}`}</button>
    </form>
  );
}
