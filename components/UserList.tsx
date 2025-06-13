import React ,{ useState }from "react";
import { User } from "../types/User"; //User.tsからUser型をimport
import CustomCard from "./parts/CustomCard"; 
import DeleteUserButton from "./DeleteUserButton";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

// props の型を定義(users: User[] 型の props を受け取る)
export interface UserListProps {
  users: User[];
}

// 関数コンポーネントの定義
const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users);//useStateでusersを保持

  //  filter処理で削除されたユーザーを除外して再描画
  const handleDelete = (deletedUserId: number) => {
    setUserList((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
    );
  };
  return (
    //受け取ったusersをmap処理でループし、UserCardを呼び出す
    <Box>
        {userList.map((user) => (
        <CustomCard
          key={user.id}
          title={user.name}
          description={
            <>
              <Typography variant="body2" color="text.secondary">
                メール: {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                役割: {user.role}
              </Typography>
            </>
          }
          actions={
            <>
              <Button
                size="small"
                variant="contained"
                component={Link}
                href={`/users/${user.id}/details`}
              >
                詳細
              </Button>
              <Button
                size="small"
                variant="outlined"
                component={Link}
                href={`/users/${user.id}/edit`}
              >
                編集
              </Button>
              <DeleteUserButton
                userId={user.id}
                onDelete={() => handleDelete(user.id)}
              />
            </>
          }
        />
      ))}
    </Box>
  );
};

export default UserList;
