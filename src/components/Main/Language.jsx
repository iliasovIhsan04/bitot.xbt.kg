import React, { useState, useRef } from "react";
import { ListItem, Paper, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import en from "../../assets/img/flagEnglish.svg";
import ru from "../../assets/img/flagRussian.svg";

const languageMap = {
  en: { label: en, lang: "Eng", active: true },
  ru: { label: ru, lang: "Рус", active: false },
};

const Language = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const handleClose = (languageDir) => {
    document.body.classList.remove("scrolled-body");
    i18n.changeLanguage(languageDir);
    document.documentElement.lang = languageDir;
    localStorage.setItem("lang", languageDir);
    setOpen(false);
    window.location.reload();
  };

  const list = (
    <Paper sx={{ position: "absolute", top: "45px" }}>
      <ListItem
        sx={{
          display: "flex",
          gap: "10px",
        }}
        button
        onClick={() =>
          handleClose(i18n.resolvedLanguage === "en" ? "ru" : "en")
        }
      >
        <img
          width={24}
          height={24}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={
            i18n.resolvedLanguage === "en"
              ? languageMap.ru.label
              : languageMap.en.label
          }
          alt=""
        />
        <Typography variant="p">
          {i18n.resolvedLanguage === "en"
            ? languageMap.ru.lang
            : languageMap.en.lang}
        </Typography>
      </ListItem>
    </Paper>
  );

  return (
    <Box
      ref={containerRef}
      width={110}
      height={45}
      borderRadius={2}
      sx={{ background: "#F5F5F5", position: "relative" }}
      className="center"
    >
      <MenuItem
        aria-label="change langauge"
        size="small"
        color="#3698D4"
        style={{ gap: "10px", width: "100px" }}
        onClick={() => {
          document.body.classList.add("scrolled-body");
          setOpen(!open);
        }}
      >
        <img
          width={24}
          height={24}
          style={{
            borderRadius: "50px",
            objectFit: "cover",
          }}
          alt=""
          src={i18n.resolvedLanguage === "en" ? en : ru}
        />
        <Typography variant="p" fontSize={16}>
          {i18n.resolvedLanguage === "en" ? "Eng" : "Рус"}
        </Typography>
        <IoIosArrowDown
          style={{
            position: "relative",
            zIndex: "99",
          }}
          color="#000"
          size={45}
        />
      </MenuItem>
      <Slide direction="down" in={open} container={containerRef.current}>
        {list}
      </Slide>
    </Box>
  );
};

export default Language;
