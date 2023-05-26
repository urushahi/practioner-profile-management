export default function toJson(payload) {
  const { email, name, password, repeatPassword } = payload;
  return {
    email,
    name,
    password,
    confirm_password: repeatPassword,
  };
}
