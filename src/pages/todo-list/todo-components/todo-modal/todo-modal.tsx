import React, { FC } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { FormControlLabel, Checkbox, Button } from "@mui/material";

import { Modal } from "components";
import { TodoModel } from "models";
import { TodoModalProps } from "./todo-modal.types";
import { validationSchema, getInitialValues } from "./todo-modal.constants";

import styles from "./todo-modal.module.css";

export const TodoModal: FC<TodoModalProps> = ({ open, editData, setClose, handleEditData }) => {
  const initialValues = getInitialValues(editData);
  const title = editData?.id ? "Edit Task" : "Add Task";

  const handleSubmit = (values: TodoModel) => {
    handleEditData(values);
    setClose(false);
  };

  return (
    <Modal open={open} setClose={setClose}>
      <h3 className={styles.title}>{title}</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
        validationSchema={validationSchema}
      >
        {({ errors }: FormikProps<TodoModel>) => (
          <Form className={styles.form}>
            <fieldset className={styles.fieldSet}>
              <Field name="content" placeholder="Do you really want to do that?" className={styles.field} />
              <div className={styles.errorMessage}>{errors.content}</div>
            </fieldset>
            <fieldset className={styles.fieldSet}>
              <Field
                type="checkbox"
                name="done"
                as={FormControlLabel}
                control={<Checkbox />}
                label="Completed?"
                className={styles.checkbox}
              />
            </fieldset>
            <div className={styles.btnGroup}>
              <Button variant="outlined" type="submit" className={styles.saveBtn}>
                Save
              </Button>
              <Button variant="outlined" className={styles.cancelBtn} onClick={() => setClose(false)}>
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
