import React, { FC } from "react";
import { Paper, List, Button } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { Loader } from "components";
import { TodoListItem, TodoModal } from "../../todo-components";
import { useTodoListHook } from "./todo-list.hook";

import styles from "./todo-list.module.css";

export const TodoList: FC = () => {
  const {
    data,
    editData,
    loading,
    isShowContent,
    isShowError,
    errorMessage,
    isModalOpen,
    isEqual,
    handleDragEnd,
    handleEdit,
    handleAdd,
    handleModalClose,
    handleEditData,
    handleDeleteData,
    handleResetData,
    handleSaveData,
  } = useTodoListHook();

  return (
    <Paper className={styles.paper} elevation={5}>
      {loading && <Loader isAbsolute />}
      {isShowError && <div>{errorMessage}</div>}
      {isShowContent && (
        <>
          <div className={styles.btnGroup}>
            <div>
              <Button variant="contained" className={styles.saveBtn} disabled={isEqual} onClick={handleSaveData}>
                Save changes
              </Button>
              <Button variant="contained" className={styles.cancelBtn} disabled={isEqual} onClick={handleResetData}>
                Discard changes
              </Button>
            </div>
            <Button variant="contained" onClick={handleAdd}>
              Add task
            </Button>
          </div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todolist">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <List className={styles.list}>
                    {data.map((todo, index) => (
                      <TodoListItem
                        {...todo}
                        key={index}
                        keyDnd={index}
                        handleEdit={handleEdit}
                        handleEditData={handleEditData}
                        handleDelte={handleDeleteData}
                      />
                    ))}
                    {provided.placeholder}
                  </List>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </>
      )}
      {isModalOpen && (
        <TodoModal open={isModalOpen} setClose={handleModalClose} editData={editData} handleEditData={handleEditData} />
      )}
    </Paper>
  );
};
