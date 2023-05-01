import { NuxtAuthHandler } from '#auth'
import SlackProvider from 'next-auth/providers/slack'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  // Can be generated with `openssl rand -base64 32`
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    SlackProvider.default({
      clientId: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
    }),
  ],
})
