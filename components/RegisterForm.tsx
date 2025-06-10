// components/RegisterForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { createUser } from "../utils/api";

// 必要に応じて利用する
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

interface RegisterFormProps {
  onSuccess: () => void;
}

// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC<RegisterFormProps> = ({onSuccess}) => {
   const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>();

  
  // 必要に応じて利用する
    const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await createUser(data);
      reset();
      if(onSuccess) onSuccess();
    } catch {
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="名前"
          fullWidth
          margin="normal"
            {...register("name", { required: true })}
         error={!!errors.name}
        />

        <TextField
          label="メールアドレス"
          type="email"
          fullWidth
          margin="normal"
            {...register("email", { required: true })}
         error={!!errors.email}
        />

        <TextField
          label="役職"
          fullWidth
          margin="normal"
            {...register("role", { required: true })}
          error={!!errors.role}
        />

      </form>
    </Box>
  );
};

export default RegisterForm;
