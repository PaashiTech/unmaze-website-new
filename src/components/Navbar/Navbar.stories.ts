import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { NavbarButtonData, NavbarLinksData } from "./Navbar";

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
    button: NavbarButtonData,
    links: NavbarLinksData,
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
        linkText: "Link 1",
        redirectTo: "#link1",
      },
      {
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
