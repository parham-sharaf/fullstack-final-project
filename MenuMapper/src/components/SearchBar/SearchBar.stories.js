import { SearchBar } from ".";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    state: {
      options: ["active", "filled", "def-center", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    topbar: true,
    mic: true,
    clearIcon: true,
    className: {},
  },
};
