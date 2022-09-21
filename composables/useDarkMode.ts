const useDarkMode = () => {
  const isDarkMode = useState<boolean>("darkMode", () => true);

  const toggleDarkMode = () => (isDarkMode.value = !isDarkMode.value);
  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
