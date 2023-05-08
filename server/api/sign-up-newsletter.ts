export default defineEventHandler((event) => {
  console.log(event)
  return {
    status: 'success'
  }
})
