import { fetchUserById } from '@/utils/api';
import { User } from '@/types/User';
import UserDetails from '@/components/UserDetails';
import { Box } from '@mui/material';

//propsの型定義
interface PageProps {
  params: { id: string };
}

//UserDetailsPageコンポーネントの作成
export default async function UserDetailsPage({ params }: PageProps) {
  const userId = Number(params.id); // URLからidを取得
  const user: User | null = await fetchUserById(userId); //api.ts の fetchUserById(id) を使い、該当ユーザーの情報を取得 

  return (
    <Box sx={{ p: 4 }}>
    <UserDetails user={user as User} />
  </Box>
);
}