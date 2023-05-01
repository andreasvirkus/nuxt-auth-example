import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  console.info('session in GET /users handler', session)

  return {
    users: ['Sarah', 'David'],
  }
})
