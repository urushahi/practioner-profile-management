export default function toJson(payload) {
  const { email, name, password } = payload;
  return {
    email,
    name,
    password,
  };
}
