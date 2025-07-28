import { Badge } from "../components/Badge/Badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
    title: "Example/Badge",
    component: Badge,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    render: () => <Badge />,
}