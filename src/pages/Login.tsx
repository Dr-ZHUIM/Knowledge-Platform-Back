import React, { useState, useEffect } from 'react';
import { Card, Tabs } from 'antd';
import type { TabsProps } from 'antd';

export const isAuth = false;

export const path = '/login';

export default function Login() {
  const [mode, setMode] = useState('login');

  const items: TabsProps['items'] = [
    {
      key: 'login',
      label: '登录',
      children: <div>登录</div>,
    },
    {
      key: 'register',
      label: '注册',
      children: <div>注册</div>,
    },
  ];

  return (
    <Card className="w-[400px]">
      <Tabs items={items} onChange={(e) => setMode(e)} />
    </Card>
  );
}
