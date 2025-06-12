import React from "react";
import { User } from "@/types/User"; //User.tsをインポート
import { Box, Typography } from "@mui/material";

//propsの型定義:user: Userを受けとる
interface UserDetailsProps {
  user: User;
}

//UserDetailsコンポーネントの作成
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    //表示画面の作成
    <Box
      sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, maxWidth: 400 }}
    >
      <Typography variant="h6" gutterBottom>
        ユーザー詳細
      </Typography>
      <Typography>ID: {user.id}</Typography>
      <Typography>名前: {user.name}</Typography>
      <Typography>メール: {user.email}</Typography>
      <Typography>役割: {user.role}</Typography>
    </Box>
  );
};

export default UserDetails;
