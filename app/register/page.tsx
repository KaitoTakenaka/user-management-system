// app/register/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  const router = useRouter();
  
  const handleSuccess = () => {
    // 登録成功後にユーザー一覧へ遷移
    router.push("/users");
  };
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        新規ユーザー登録
      </Typography>
      <RegisterForm onSuccess={handleSuccess} />
    </Box>
  );
};

export default RegisterPage;
