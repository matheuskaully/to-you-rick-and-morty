export function idGenerator() {
  return (
    Math.floor(Date.now() * Math.random()).toString(36)
  )
}