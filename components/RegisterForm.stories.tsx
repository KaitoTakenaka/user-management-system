// components/RegisterForm.stories.tsx

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

// TODO: メタデータ
const meta: Meta<typeof RegisterForm> = {
  title: "Components/RegisterForm",    // Storybook上の表示場所
  component: RegisterForm,             // 対象のReactコンポーネント
};
export default meta;  
// TODO: ストーリーの定義
type Story = StoryObj<typeof meta>;
// TODO: デフォルトストーリーの設定
export const Default: Story = {
};