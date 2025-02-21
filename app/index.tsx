import StackNavigator from "@/StackNavigator";
import { UserContext } from "@/UserContext";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>

      <UserContext>
        <StackNavigator />

      </UserContext>

    </>
  );
}
