import { supabase } from './supabaseClient';
import { User } from '../types/User';

export const fetchUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase
    .from<'dev_users', User>('dev_users') // テーブル名と型を2つ指定
    .select('*')
    .eq('deleted', false);//削除フラグが立っていないユーザーだけを取得(.eqでフィルター処理)

  if (error) {
    throw error;
  }
  return data as User[];
};

export const fetchUserById = async (id: number): Promise<User | null> => {
  const { data, error } = await supabase
    .from<'dev_users', User>('dev_users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') { // No rows found
      return null;
    }
    throw error;
  }

  return data as User;
};

export const createUser = async (user: Omit<User, 'id' | 'deleted'>): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .insert(user)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

export const updateUser = async (id: number, user: Partial<User>): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .update(user)
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

export const deleteUser = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from('dev_users')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
};

//論理削除用の新規関数の追加
export const softDeleteUser = async (id: number): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')// 対象のテーブル（ユーザー情報が入っている）
    .update({ deleted: true })// deletedをtrueに変更
    .eq('id', id)//IDが一致する1人のユーザーだけを対象（絞りこみ）
    .select('*')// 更新後の全カラムのデータを取得
    .single();// 1件だけ返す

  if (error) {
    throw error;
  }

  return data as User;//返すdataはUser型
};