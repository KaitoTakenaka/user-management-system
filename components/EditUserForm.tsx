// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "@/types/User";

//propsの型定義
interface EditUserFormProps {
  userId: number;
  onSuccess?: () => void;
}

// 必要に応じて利用する
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

// コンポーネントの受け取りと準備(1.)
const EditUserForm: React.FC<EditUserFormProps> = ({ userId, onSuccess }) => {
  //フォームの初期化（react-hook-form）
  const { register, handleSubmit, reset } = useForm<EditUserFormInputs>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // サーバーからユーザー情報取得
        const user: User | null = await fetchUserById(userId);
        // フォームに値をセット
        if (user) {
          reset({
            name: user.name,
            email: user.email,
            role: user.role,
          });
        }
      } catch (err) {}
    };

    fetchUser();
  }, [userId, reset]);

  //2.フォーム送信時の処理
  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      // サーバーへ更新データを送信
      await updateUser(userId, data);
      if (onSuccess) onSuccess();
    } catch (err) {}
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>
      {/*3.*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="名前"
          fullWidth
          margin="normal"
          {...register("name")}
        />

        <TextField
          label="メールアドレス"
          fullWidth
          margin="normal"
          {...register("email")}
        />

        <TextField
          label="役割"
          fullWidth
          margin="normal"
          {...register("role")}
        />

        {/*4*/}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          更新
        </Button>
      </form>
    </Box>
  );
};

export default EditUserForm;
