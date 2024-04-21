import MainApp from "./MainApp";
import { AppProvider } from "./contextapi/useGlobalContext";

const App = () => {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
};

export default App;
