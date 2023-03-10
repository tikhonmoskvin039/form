import React, { useState } from "react";
import { Modal, Form, Input, message } from "antd";
import {
  validatePhone,
  validateName,
  validateMessage,
} from "../validators/validators";

const FeedbackForm = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  function handleSuccess(data) {
    const file = new File([JSON.stringify(data)], "anyName.json", {
      type: "application/json",
    });
    const fileURL = URL.createObjectURL(file);

    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "anyName.json";
    link.click();
  }

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const values = await form.validateFields();
      const data = {
        phone: values.phone.replace(/[^0-9]/g, "").replace(/^8/, "+7"),
        name: values.name,
        message: values.message,
      };
      console.log("Отправка данных: ", JSON.stringify(data));
      handleSuccess(data);
      setSubmitting(false);
      onCancel();
      message.success("Сообщение отправлено!");
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      message.error("Ошибка при отправке сообщения");
    }
  };

  return (
    <Modal
      title="Форма обратной связи"
      open={open}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={submitting}
    >
      <Form form={form}>
        <Form.Item
          name="phone"
          label="Номер телефона"
          rules={[
            { required: true, message: "Введите номер телефона" },
            { validator: validatePhone },
          ]}
        >
          <Input placeholder="+7 (999) 999-99-99" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Имя"
          rules={[
            { required: true, message: "Введите имя" },
            { validator: validateName },
          ]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item
          name="message"
          label="Сообщение"
          rules={[
            { required: true, message: "Введите сообщение" },
            { validator: validateMessage },
          ]}
        >
          <Input.TextArea placeholder="Введите сообщение" rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FeedbackForm;
