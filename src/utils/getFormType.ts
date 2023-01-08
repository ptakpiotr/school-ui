export default function getFormType(fieldName: string, fieldType: string) {
  if (fieldType === "boolean") {
    return "checkbox";
  } else if (fieldName.startsWith("dat")) {
    return "date";
  } else {
    return fieldType;
  }
}
