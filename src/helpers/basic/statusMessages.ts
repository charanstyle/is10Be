export const success = (data: Object) => {
  return {
    status: 'success',
    data: JSON.stringify(data)
  }
}

export const error = (data: string) => {
  return {
    status: 'error',
    data: data
  }
}
