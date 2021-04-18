/**
 * 
 * @param {RequestInfo} input 
 * @param {RequestInit?} init 
 * @returns 
 */
export default async function request(input, init) {
  const response = await fetch(input, init)
  const contentType = response.headers.get('Content-Type')
  if(contentType.toLocaleLowerCase() === 'application/json') {
    return response.json()
  } else {
    return response
  }

}