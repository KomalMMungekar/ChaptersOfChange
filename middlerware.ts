import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)"],
  publicRoutes: ["/api/create-payment-intent,"],

});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

import { ClerkProvider } from "@clerk/clerk-react";

// Your publishable key
const clerkPublishableKey = "pk_test_ZmFpdGhmdWwtZGFuZS0zOS5jbGVyay5hY2NvdW50cy5kZXYk";

