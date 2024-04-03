import { SettingsContextProvider } from "./App/Context/SettingsContext";
import AppContent from "./App/AppMain";

export default function App() {
  return (
    <SettingsContextProvider>
      <AppContent />
    </SettingsContextProvider>
  );
}
