import { Button, Form, Input, message, Typography } from 'antd';
import { useNavigate, Navigate } from 'react-router-dom';
import React from 'react';
import authenticateIntoAPI from '../../hooks/funcs/authenticateIntoAPI';
import { LoginContent, LoginLayout } from '../../styles';


const { Title } = Typography;
function Login() {
  const nav = useNavigate();

  const token = localStorage.getItem("token");

  const error = () => {
    message.error('Usuário ou senha invalido');
  };

  return (
    <LoginLayout>
      {token === null ? (
        <LoginContent>
          <Typography>
            <Title>Login: Painel de controle 🔒</Title>
          </Typography>
          <Form layout='horizontal' onFinish={({username, passwd})=>{
            authenticateIntoAPI(passwd, username).then((isAuthed)=> isAuthed ? nav("/dashboard") : error());
          }}>
            <Form.Item label="Username" name="username" required>
              <Input placeholder="Insert here your username" />
            </Form.Item>
            <Form.Item label="Password" name="passwd" required>
              <Input type="password" placeholder="Insert here your password" />
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit' type="primary">Entrar</Button>
            </Form.Item>
          </Form>
      </LoginContent>
      ) : (<Navigate to="/dashboard" />)}
      
    </LoginLayout>
  );
}

export default Login;
