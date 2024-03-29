import { ThemeContextProvider } from "./App/Context/ThemeContext";
import AppContent from "./App/AppMain";

export default function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}
