
import type { UserRole } from "./site";

export const permissions = {
  ADMIN: [
    "dashboard:read",
    "books:read",
    "books:create",
    "books:update",
    "books:delete",
    "users:read",
    "users:update",
    "requests:read",
    "requests:approve",
    "requests:reject",
    "lending:read",
    "lending:create",
    "lending:return",
    "activity:read",
    "settings:update",
  ],
  USER: [
    "dashboard:read",
    "books:read",
    "requests:create",
    "requests:read_own",
    "requests:cancel_own",
    "lending:read_own",
    "profile:read_own",
    "profile:update_own",
  ],
} as const;

export type Permission =
  (typeof permissions)[keyof typeof permissions][number];

export function hasPermission(
  role: UserRole,
  permission: string,
): boolean {
  return (
    permissions[role] as readonly string[]
  ).includes(permission);
}
