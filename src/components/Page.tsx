import { message } from 'antd';
import { PropsWithChildren, useEffect } from 'react';

export default function Page({
  default: Component,
  isAuth = true,
}: PropsWithChildren<PageComponent>) {
  useEffect(() => {
    if (isAuth) {
      const token = localStorage.getItem('token');
      if (!token) {
        message.error('请先登录!');
      }
    }
  }, [isAuth]);
  return <>{<Component />}</>;
}
