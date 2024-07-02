import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/dashboard/global/Topbar"
import Sidebar from "./scenes/dashboard/global/Sidebar";
import Dashboard from "./scenes/dashboard/dashboard";
import Team from "./scenes/dashboard/team";
import Invoices from "./scenes/dashboard/invoices";
import Contacts from "./scenes/dashboard/contacts";
import Bar from "./scenes/dashboard/bar";
import Form from "./scenes/dashboard/form";
import Line from "./scenes/dashboard/line";
import Pie from "./scenes/dashboard/pie";
import FAQ from "./scenes/dashboard/faq";
import Geography from "./scenes/dashboard/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/dashboard/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" element={<Login />} /> */}
              <Route path="/home" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
