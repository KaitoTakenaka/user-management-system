import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { User } from "../types/User";
import Link from "next/link";
import DeleteUserButton from "./DeleteUserButton"; //DeleteUserButtonimport

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void; //onDeleteの追加
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
      <CardActions>
        {/*詳細ボタンの作成*/}
        <Button
          size="small"
          component={Link}
          href={`/users/${user.id}/details`}
        >
          詳細
        </Button>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>
          編集
        </Button>
        {/* ボタンの修正*/}
        <DeleteUserButton
          userId={user.id} //削除するユーザーのID
          onDelete={() => onDelete(user.id)} // UserListコンポーネントに削除完了を伝える
        />
      </CardActions>
    </Card>
  );
};

export default UserCard;
