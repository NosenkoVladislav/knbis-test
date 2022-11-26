import { useState, useEffect } from "react";
import { DropResult } from "react-beautiful-dnd";

import { getTodos, putTodos } from "api";
import { useFetch, useCompareHook } from "hooks";
import { TodoModel } from "models";
import { reorder, update, add } from "utils";

export const useTodoListHook = () => {
  const apiPayload = useFetch<TodoModel[]>(getTodos);
  const { payload, loading, error } = apiPayload;

  const [data, setData] = useState(payload || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<TodoModel | null>(null);

  const isShowContent = !!payload && !loading;
  const isShowError = error && !loading;
  const errorMessage = error?.message || "Something went wrong...";

  const { initialData, isEqual } = useCompareHook<TodoModel>(data);

  useEffect(() => {
    if (isShowContent) setData(payload);
  }, [isShowContent, payload]);

  const handleDragEnd = (result: DropResult) => reorder<TodoModel>(data, result, setData);

  const handleEdit = (editData: TodoModel): void => {
    setEditData(editData);
    setIsModalOpen(true);
  };
  const handleAdd = () => setIsModalOpen(true);

  const handleEditData = (editedTask: TodoModel) => {
    const isEdit = data.findIndex((task) => task.id && task.id === editedTask?.id) !== -1;
    const updatedData = isEdit ? update<TodoModel>(data, editedTask) : add<TodoModel>(data, editedTask);

    setData(updatedData);
  };
  const handleDeleteData = (id: number) => {
    const updatedData = data.filter((task) => task.id !== id);
    setData(updatedData);
  };
  const handleResetData = () => setData(initialData);

  const handleSaveData = () => {
    putTodos(data);
    alert("No Backend :(");
  };

  const handleModalClose = () => {
    setEditData(null);
    setIsModalOpen(false);
  };

  return {
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
  };
};
