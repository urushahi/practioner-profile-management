export default function toJson(payload) {
  const { email, password } = payload;
  return {
    email,
    password,
  };
}
