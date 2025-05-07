import { useState } from "react";
import { Button, Typography, Box, Container, Stack } from "@mui/material";
import { T } from "gt-react"; 
import en from "./gt/en.json";
import es from "./gt/es.json";
import ur from "./gt/ur.json";

function App({ setLanguage }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setLanguage(lang);
  };

  const translations = {
    en,
    es,
    ur,
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        <T>{translations[currentLanguage].greeting}</T>
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem", mb: 4 }}>
        <T>{translations[currentLanguage].description}</T>
      </Typography>

      <Typography variant="h6" gutterBottom>
        <T>{translations[currentLanguage].select_language}</T>
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" onClick={() => handleLanguageChange("en")}>
          English
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleLanguageChange("es")}>
          Spanish
        </Button>
        <Button variant="contained" color="success" onClick={() => handleLanguageChange("ur")}>
          Urdu
        </Button>
      </Stack>
    </Container>
  );
}

export default App;
