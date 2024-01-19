import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator";
import PasswordProvider from "./context";

export default function App() {
  return (
    <NavigationContainer>
      <PasswordProvider>
        <Navigator />
      </PasswordProvider>
    </NavigationContainer>
  );
}
