import React from 'react';
import { User } from '../types/User';//User.tsからUser型をimport
import UserCard from './UserCard';
import { Box } from '@mui/material';

// 2.props の型を定義(users: User[] 型の props を受け取る)
export interface UserListProps {
  users: User[];
}

// 3.関数コンポーネントの定義
const UserList: React.FC<UserListProps> = ({ users }) => {
   return (
    //4.受け取ったusersをmap処理でループし、UserCardを呼び出す
    <Box>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
};

export default UserList;