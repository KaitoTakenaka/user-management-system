import type { Meta, StoryObj } from "@storybook/react";
import DeleteUserButton from "./DeleteUserButton";

//メタデータの定義
const meta: Meta<typeof DeleteUserButton> = {
  title: "Components/DeleteUserButton", // Storybookのサイドバーに表示される名前
  component: DeleteUserButton, // このストーリーで使うコンポーネント
};

export default meta;

//ストーリーの定義
type Story = StoryObj<typeof DeleteUserButton>;

//デフォルトストーリーに例となるユーザーIDを設定
export const Default: Story = {
  args: {
    userId: 1,
    onDelete: () => {
      console.log("ユーザーが削除されました");
    },
  },
};
