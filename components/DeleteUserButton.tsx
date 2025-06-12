import React from "react";
import { Button } from "@mui/material";//MUIのボタンをインポート
import { softDeleteUser } from "../utils/api"; // softDeleteUser 関数のインポート

// propsの型定義：どのユーザーを削除するか、削除後の処理をどうするか
interface DeleteUserButtonProps {
  userId: number;// 削除したいユーザーのID
  onDelete: () => void;// 削除が完了した後に呼び出す関数
}

//関数コンポーネントの定義
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,//propsから受け取る
}) => {
  // 削除ボタンがクリックされたときの処理
  const handleDelete = async () => {
    // ユーザーに確認ダイアログを表示
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        // 削除処理（論理削除）
        await softDeleteUser(userId);//削除フラグを true にする
        // 削除成功後、UserCardコンポーネント（親）に通知
        onDelete();
      } catch (error) {
        console.error(error);
      }
    }
  };

  // ボタンの見た目とイベントハンドラーの設定
  return (
    <Button size="small" color="error" onClick={handleDelete}>
      削除
    </Button>
  );
};

export default DeleteUserButton;
