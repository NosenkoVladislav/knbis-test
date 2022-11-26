import React, { FC } from "react";
import cn from "classnames";
import { Draggable } from "react-beautiful-dnd";
import { ListItem, ListItemIcon, ListItemButton, IconButton, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import { TodoListItemProp } from "./todo-list-item.types";

import styles from "./todo-list-item.module.css";

export const TodoListItem: FC<TodoListItemProp> = (todoItemProps) => {
  const { id, content, done, order, keyDnd, handleEdit, handleEditData, handleDelte } = todoItemProps;

  const handleChangeIsDone = () => handleEditData({ id, content, order, done: !done });
  const itemStyles = cn(styles.item, { [styles.done]: done });

  return (
    <Draggable draggableId={String(keyDnd)} index={keyDnd}>
      {(provided) => (
        <ListItem
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="edit"
                className={styles.actionButton}
                onClick={() => handleEdit(todoItemProps)}
              >
                <EditIcon className={styles.actionIcon} />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                className={styles.actionButton}
                onClick={() => handleDelte(id)}
              >
                <DeleteIcon className={styles.actionIcon} />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="drag"
                className={styles.actionButton}
                {...provided.dragHandleProps}
                disableRipple
              >
                <DragHandleIcon />
              </IconButton>
            </>
          }
          disablePadding
          divider
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={itemStyles}
        >
          <ListItemButton dense onClick={handleChangeIsDone}>
            <ListItemIcon className={styles.checkWrap}>
              <Checkbox edge="start" checked={done} tabIndex={-1} disableRipple />
            </ListItemIcon>
            <div className={styles.content}>{content}</div>
          </ListItemButton>
        </ListItem>
      )}
    </Draggable>
  );
};
