import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { navbarButtonData, navbarLinksData } from "./navbarData";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prod: Story = {
  args: {
    button: navbarButtonData,
    links: navbarLinksData,
  },
};

export const OnlyButton: Story = {
  args: {
    links: [],
    button: {
      linkText: "Test button",
      redirectTo: "#testbutton",
    },
  },
};

export const LinksWithButton: Story = {
  args: {
    links: [
      {
        id: 1,
        linkText: "Link 1",
        redirectTo: "#link1",
      },
      {
        id: 2,
        linkText: "Link 2",
        redirectTo: "#link2",
      },
    ],
    button: {
      linkText: "Test button",
      redirectTo: "#testbutton",
    },
  },
};
