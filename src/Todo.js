import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

function Todo({ text }) {
  return (
    <ListItem>
      <ListItemText primary={text} secondary='Dummy Deadline' />
    </ListItem>
  );
}
export default Todo;
