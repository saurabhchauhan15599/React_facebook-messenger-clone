import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

function Message( {message,username} ) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && 'message_user'}`}>
      <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
        <CardContent>
          <Typography
            color='white'
            variant='h5'
            component='h2'
            >
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
      </div>
  );
};

export default Message;
//  1:27:39