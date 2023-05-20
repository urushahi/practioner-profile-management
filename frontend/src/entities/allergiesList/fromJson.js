export default function fromJson(payload) {
  const data = payload.map(mappedData);
  return data;
}

function mappedData(allergies) {
  const { id, allergy } = allergies;
  return {
    value: id,
    label: allergy,
  };
}
