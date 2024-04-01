import { useState } from "react";

export function useShowModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => setModalVisible(!modalVisible);

  return { modalVisible, handleModal };
}
