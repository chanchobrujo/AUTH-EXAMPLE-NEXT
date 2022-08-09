import NextAuth from 'next-auth';
import clientPromise from 'lib/mongodb';
import GithubProvider from 'next-auth/providers/github';
import {MongoDBAdapter} from '@next-auth/mongodb-adapter';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
});
