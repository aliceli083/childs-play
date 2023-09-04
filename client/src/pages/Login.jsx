import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';


export default function Login() {
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [userName, setUserName] = useState('')
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [childName, setChildName] = useState('');
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [login] = useMutation(LOGIN_USER);


  const toggleCreateAccountForm = () => {
    setShowCreateAccountForm(!showCreateAccountForm);
  };

  const handleLogin = async () => {
    console.log('Login Email: ', loginEmail);
    console.log('Login Password: ', loginPassword);

    // const email = document.querySelector('#email').value.trim();
    // const password = document.querySelector('#password').value.trim();

    // if (email && )

    try {
      const response = await login({
        variables: { email: loginEmail, password: loginPassword },
      });
        console.log(response);
      Auth.login(response.data.login.token);
    } catch (e) {
      console.error(e);
    }
    

  };

  const handleRegister = async () => {
    console.log('UserName: ' , userName);
    console.log('First Name: ', newFirstName);
    console.log('Last Name: ', newLastName);
    console.log('New Email: ', newEmail);
    console.log('New Password: ', newPassword);
    console.log('Child Name: ', childName);

    // const newEmail = document.querySelector('#new_email').value.trim();
    // const newPassword = document.querySelector('#new_password').value.trim();
    // const newFirstName = document.querySelector('#user_first_name').value.trime();
    // const newLastName = document.querySelector('#user_last_name').value.trim();
    // const newChildName = document.querySelector('#child_name').value.trim();

   

    const formData = {
      username: userName.trim(),
      email: newEmail,
      password: newPassword,

    }

    console.log(formData);
    
    try {
      const {data} = await addUser({
        variables: { ...formData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-blue-600 p-4 rounded-lg w-80 text-center border-10 border-black">
        {showCreateAccountForm ? (
          <div>
            <header id='create_account_form' className="text-2xl font-semibold text-white">Create an Account</header>
            <div className="space-y-2">
              <label htmlFor="user_name" className="block font-medium text-gray-700">
                User Name
              </label>
              <input
                type="text"
                id="user_name"
                placeholder="User Name"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {/* <div className="space-y-2">
              <label htmlFor="user_first_name" className="block font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="user_first_name"
                placeholder="First Name"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                onChange = {(e) => {setNewFirstName(e.target.value.trim())}}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="user_last_name" className="block font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="user_last_name"
                placeholder="Last Name"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                onChange={(e) => {setNewLastName(e.target.value.trim())}}
              />
            </div> */}
            <div className="space-y-2">
              <label htmlFor="new_email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="new_email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="new_password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="new_password"
                placeholder="Password"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            {/* <div className="space-y-2">
              <label htmlFor="child_name" className="block font-medium text-gray-700">
                Child's Name
              </label>
              <input
                type="text"
                id="child_name"
                placeholder="Child's Name"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                onChange={(e) => {setChildName(e.target.value.trim())}}
              />
            </div> */}
            
          </div>
        ) : (
          <div className="space-y-4">
            <header id='login_form' className="text-2xl font-semibold text-white">Login</header>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
          </div>
        )}

<div className="mt-6 space-y-4">
  {showCreateAccountForm ? (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded w-full"
      onClick={toggleCreateAccountForm}
    >
      Back to Login
    </button>
  ) : (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded w-full"
      onClick={() => setShowCreateAccountForm(true)}
    >
      Create an Account
    </button>
  )}

  {showCreateAccountForm ? (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      onClick={handleRegister}
    >
      Register
    </button>
  ) : (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      onClick={handleLogin}
    >
      Login
    </button>
  )}
</div>
      </div>
    </div>
  );
};