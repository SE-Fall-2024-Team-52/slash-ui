/**
 * ContextWrapper component provides the AuthContext to its child components.
 *
 * This component maintains the user data state and provides it along with a
 * function to update it through the AuthContext.Provider. It also renders
 * the Navigation and SlashRouter components.
 *
 * @component
 *
 * @typedef {Object} UserData
 * @property {string} username - The username of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 *
 * @returns {JSX.Element} The rendered component.
 */
import React from "react";
import SlashRouter from "./SlashRouter";
import Navigation from "./components/Navigation/Navigation";
export const 
AuthContext = React.createContext<{
  userData: UserData | undefined;
  setUserData: (newData: UserData | undefined) => void;
}>({ userData: undefined, setUserData: (temp) => {} });

export type UserData = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export default function ContextWrapper() {
  const [userData, setUserData] = React.useState<UserData | undefined>(
    undefined
  );
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      <Navigation />
      <SlashRouter />
    </AuthContext.Provider>
  );
}
