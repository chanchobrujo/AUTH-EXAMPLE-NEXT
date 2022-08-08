import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT || '',
      clientSecret: process.env.FACEBOOK_SECRET || '',
    }),
  ],
});
