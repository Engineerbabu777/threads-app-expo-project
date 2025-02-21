import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface UserContextType {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

const UserType = createContext<UserContextType | null>(null);

interface UserContextProps {
  children: ReactNode;
}

const UserContext = ({ children }: UserContextProps) => {
  const [userId, setUserId] = useState<string>("");
  return (
    <UserType.Provider value={{ userId, setUserId }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
