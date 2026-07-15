import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      isStudent: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
    isStudent: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    isStudent: boolean;
  }
}
