// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm";
import { useParams, useRouter } from "next/navigation";
import { Typography, Box } from "@mui/material";

// EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  // URL から id を取得し、数値に変換
  const userId = Number(params.id);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      <EditUserForm userId={userId} onSuccess={() => router.push("/users")} />
    </Box>
  );
};

export default EditUserPage;
