import { TUser } from "./types/posts";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

const routes = ["/login", "/register"];
type TRoleBasedRoutes = {
  USER: RegExp[];
  ADMIN: RegExp[];
};

const roleBasedRoutes: TRoleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  // const user: Partial<TUser> = {
  //   role: "USER",
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  // };

  if (!user) {
    if (routes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login/?redirect=${pathname}`, request.url)
      );
    }
  }
  const userRole = user?.role as keyof TRoleBasedRoutes;
  if (userRole && roleBasedRoutes[userRole]) {
    const allowedRoutes = roleBasedRoutes[userRole];
    const isMatched = allowedRoutes.some((path) => pathname.match(path));
    if (isMatched) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile/:page*", "/admin/:page*", "/login", "/register"],
};
