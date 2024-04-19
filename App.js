import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/auth/LoginScreen";
import Signup from "./screen/auth/SignupScreen";
import WelcomScreen from "./screen/auth/WelcomScreen";
import Tabs from "./navigation/Tabs";
import { useState } from "react";
const Stack = createNativeStackNavigator();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const initialProps = {
    isLogin,
    setIsLogin,
  };
  if (isLogin) {
    return <Tabs setIsLogin={setIsLogin} />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcom" component={WelcomScreen} />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          initialParams={{ initialProps }}
        />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
