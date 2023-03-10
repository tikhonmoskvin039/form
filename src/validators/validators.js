export const validatePhone = (rule, value) => {
  const phoneRegex = /^(\+7|8)?[\s-]?\(?[489][0-9]/;
  if (!value || phoneRegex.test(value)) {
    return Promise.resolve();
  }

  return Promise.reject("Некорректный номер телефона");
};

export const validateName = (rule, value) => {
  const nameRegex = /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/;
  if (!value || nameRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject("Имя должно содержать только буквы и цифры");
};

export const validateMessage = (rule, value) => {
  const messageRegex = /^[а-яА-ЯёЁa-zA-Z0-9\s.,!?]+$/;
  if (!value || messageRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(
    "Сообщение должно содержать только буквы, цифры и знаки препинания"
  );
};
