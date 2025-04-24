export class ObjectUtils {
  static objectToFormData<T>(
    obj: T,
    formData = new FormData(),
    parentKey = ""
  ): FormData {
    for (const key in obj as Record<string, unknown>) {
      if (Object.hasOwn.hasOwnProperty.call(obj, key)) {
        const value = (obj as Record<string, unknown>)[key];

        const parent = Number.isNaN(Number(key))
          ? `${parentKey}.${key}`
          : `${parentKey}[${key}]`;

        const fieldName = parentKey ? parent : key;

        if (
          typeof value === "object" &&
          !(value instanceof Blob) &&
          !(value instanceof File)
        ) {
          ObjectUtils.objectToFormData(value, formData, fieldName);
        } else if (value !== null && value !== undefined) {
          formData.append(fieldName, value as string | Blob);
        }
      }
    }
    return formData;
  }
}
