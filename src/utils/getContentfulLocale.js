export function getContentfulLocale(lang) {
  const map = {
    en: "en-US",
    fr: "fr-FR",
  };

  return map[lang] || "en-US"; // fallback
}
