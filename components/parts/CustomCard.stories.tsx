// components/parts/CustomCard.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "../../components/parts/CustomCard";
import CustomButton from "../../components/parts/CustomButton";

// メタデータの定義
const meta: Meta<typeof CustomCard> = {
  title: "Parts/CustomCard", // Storybook上での表示カテゴリ
  component: CustomCard, // 対象のコンポーネント
  tags: ["autodocs"], // ドキュメント自動生成のためのタグ
};
export default meta;
//  ストーリーの定義
type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: "カードタイトル",
    description: "これはカスタムカードの説明です。",
    actions: (
      <>
        <CustomButton variantType="secondary">アクション1</CustomButton>
        <CustomButton variantType="danger">アクション2</CustomButton>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: "アクションなしのカード",
    description: "アクションが含まれていないカードの説明。",
  },
};
