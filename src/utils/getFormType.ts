export default function getFormType<T>(fieldName: string, field: T) {
  if (typeof field === "boolean") {
    return "checkbox";
  } else if (fieldName.startsWith("dat")) {
    return "date";
  } else {
    return typeof field;
  }
}
