export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return {
      text: "Good Morning",
      icon: "partly-sunny",
      color: "#FFA500",
    };
  }

  if (hour < 16) {
    return {
      text: "Good Afternoon",
      icon: "sunny",
      color: "#FFD700",
    };
  }
  if (hour < 19) {
    return {
      text: "Good Evening",
      icon: "partly-sunny",
      color: "#FF8C00",
    };
  }
  return {
    text: "Good Evening",
    icon: "moon",
    color: "#5C6BC0",
  };
};
