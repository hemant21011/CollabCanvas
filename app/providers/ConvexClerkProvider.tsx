"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { Loading } from "@/components/auth/loading";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

const ConvexClerkProvider = ({ children }: { children: ReactNode }) => (
  <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string} >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <Authenticated>
      {children}
      </Authenticated>
      <AuthLoading>
        <Loading/>
      </AuthLoading>
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;