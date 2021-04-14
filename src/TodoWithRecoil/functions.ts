export const UUID = (): string => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.round(Math.random() * charactersLength))
  }
  return result
}