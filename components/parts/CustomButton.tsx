import React from 'react';
import { Button, ButtonProps } from '@mui/material';

//2.CustomButton に渡すpropsの型定義
interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger';
}
//variantTypeの指定。primary / secondary / dangerの3つから選択可。

//3.CustomButtonの作成
const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = 'primary',//渡されなかったらprimaryに
  variant = 'contained',//MUIのボタンタイプのデフォルト
  ...props//その他すべてのプロパティをまとめて受け取る
}) => {
  let color: ButtonProps['color'] = 'primary';//MUIのボタンが使う color を変数として用意

  //4.variantType の値に応じて、MUIのcolorを決める。
  switch (variantType) {
    case 'secondary':
      color = 'secondary';//灰紫
      break;//switch 文を途中で終了させる。
    case 'danger':
      color = 'error';//赤（MUIでは 'danger' という色はないので、代わりに 'error' を使う）
      break;
    case 'primary':
    default:
      color = 'primary';//青
  }

  //5.画面にボタンを表示する処理の実行
  return (
    <Button color={color} variant={variant} {...props} />
  );
};

export default CustomButton;