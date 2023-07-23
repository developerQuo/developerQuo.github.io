export function getValues<T extends Object>(form: HTMLFormElement): T {
  const result = new Object() as T
  const formData = new FormData(form)
  formData.forEach((value, key) => {
    Object.assign(result, { [key]: value })
  })
  return result
}
