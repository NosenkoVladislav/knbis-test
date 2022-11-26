import React, { FC } from "react";

import { Container } from "components";
import { TodoList } from "./todo-components";

import styles from "./todo-list-page.module.css";

export const TodoListPage: FC = () => {
  return (
    <Container>
      <h3 className={styles.title}>Todo List</h3>
      <TodoList />
    </Container>
  );
};
