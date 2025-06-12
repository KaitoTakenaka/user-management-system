import React ,{ useState }from "react";
import { User } from "../types/User"; //User.tsからUser型をimport
import UserCard from "./UserCard";
import { Box } from "@mui/material";

// props の型を定義(users: User[] 型の props を受け取る)
export interface UserListProps {
  users: User[];
}

// 関数コンポーネントの定義
const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users);//2-3-a:useStateでusersを保持

  //  2-3-4-a.filter処理で削除されたユーザーを除外して再描画
  const handleDelete = (deletedUserId: number) => {
    setUserList((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
    );
  };
  return (
    //2-3-4-b.受け取ったusersをmap処理でループし、UserCardを呼び出す
    <Box>
      {userList.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete}/>
      ))}
    </Box>
  );
};

export default UserList;
