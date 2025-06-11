// components/EditUserForm.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import EditUserForm from "./EditUserForm";

// メタデータの定義
const meta: Meta<typeof EditUserForm> = {
  title: "Components/EditUserForm", // Storybook上の表示場所
  component: EditUserForm, // 対象のReactコンポーネント
};

export default meta;
// ストーリーの定義
type Story = StoryObj<typeof EditUserForm>;

export const Default: Story = {
  args: {
    userId: 1, // EditUserForm.tsxのpropsの型定義でUserIdをnumber型にしているので、number型で渡す
  },
};
