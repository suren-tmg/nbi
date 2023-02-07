/* Default Language */
Config.default = "tr";

/* Language List */
Config.list = {
  de: {
    // display text
    text: "Deutsch",
    // display icon
    icon: require("./locale/flags/de.svg"),
    // translate file
    file: require("./locale/de"),
  },
  en: {
    text: "English",
    icon: require("./locale/flags/en.svg"),
    file: require("./locale/en"),
  },
  tr: {
    text: "Türkçe",
    icon: require("./locale/flags/tr.svg"),
    file: require("./locale/tr"),
  },
};
