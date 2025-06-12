import type { Meta } from "@storybook/react";
import UserList from "./UserList";
import type { StoryObj } from "@storybook/react";
import { User } from "../types/User";

//2.メタデータの定義
const meta: Meta<typeof UserList> = {
  title: "Components/UserList",
  component: UserList,
  tags: ["autodocs"],//Storybook に自動でドキュメントを表示するように指示（props の型や説明が自動で一覧化される）
};

export default meta;

//3-a.サンプルユーザーデータの設定
const sampleUsers: User[] = [
  {
    id: 1,
    name: "竹中 海人",
    email: "xxxxx",
    role: "aaaaa",
    deleted: false,
  },
  {
    id: 2,
    name: "田中 太郎",
    email: "yyyyy",
    role: "bbbbb",
    deleted: false,
  },
];

//3-b.サンプルユーザーデータの呼び出し
export const Default: StoryObj<typeof UserList> = {
  args: {
    users: sampleUsers,
  },
};
