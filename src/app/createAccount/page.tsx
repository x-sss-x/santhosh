"use client";
import React from 'react';
import Button,{ButtonProps} from '@/components/Button';
import Input from '@/components/Input';
const CreateAccount = () => {
  return (
        <div>

              <div className="mt-6">
              <Input inputVariant="email" placeholder="email@gmail.com" />
              </div>
              <div className="m-3">
              <Input inputVariant="username" placeholder="username" />
              </div>
              <div className="m-3">
              <Input inputVariant="phoneNumber" placeholder="phonenumber" />
              </div>
              <div className="m-3">
              <Input inputVariant="age" placeholder="age" />
              </div>
              <div className="m-3">
             
              <Input inputVariant="address" placeholder="address" />
              </div>
              <div className="m-3">
              <Input inputVariant="password" placeholder="password" />
            </div>
              <div className="m-3">
              <Input inputVariant="confirmPassword" placeholder="confirmpassword" />
            </div>
            <div className='mx-auto mt-5'>
              <Button>Create new account</Button>

            </div>

              </div>
              
                    
      )
}

export default CreateAccount;