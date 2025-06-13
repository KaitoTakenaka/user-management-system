// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "../../components/parts/CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

//1.メタデータのエクスポート
export default meta;

// 2.ストーリーの定義
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};

//3.Secondary
export const Secondary: Story = {
  args: {
    variantType: "secondary",
    children: "Secondary Button",
  },
};

//3.danger
export const Danger: Story = {
  args: {
    variantType: "danger",
    children: "Danger Button",
  },
};
