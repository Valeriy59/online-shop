const instanceUrl = 'https://api.storerestapi.com/products'

export const getItemsList = () => {
  return fetch(instanceUrl).then((response) => response.json())
}
