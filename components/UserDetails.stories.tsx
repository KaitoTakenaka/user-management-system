import type { Meta, StoryObj } from '@storybook/react';
import UserDetails from './UserDetails';
import { User } from '@/types/User';

// 2. Metaを定義
const meta: Meta<typeof UserDetails> = {
  title: 'Components/UserDetails',  // Storybookでの表示名
  component: UserDetails,           // 対象のコンポーネント
  tags: ['autodocs'],               // 自動ドキュメント化
};

export default meta;

// 3. StoryObjを定義
type Story = StoryObj<typeof UserDetails>;

// 4.デフォルトストーリーを作成(ユーザーデータ未取得のためモックデータをべた書き)
export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: '竹中 海人',
      email: 'aaaaa',
      role: 'bbbbb',
      deleted: false,
    } as User,
  },
};
