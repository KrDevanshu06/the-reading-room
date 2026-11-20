export const siteConfig = {
  name: "The Reading Room",
  description:
    "A thoughtfully designed digital library management platform.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  version: "1.0.0",
  author: "The Reading Room",
};

export const appConfig = {
  defaultPageSize: 12,
  maxPageSize: 50,
  otpLength: 6,
  otpExpiryMinutes: 10,
  otpResendCooldownSeconds: 60,
  otpMaxAttempts: 5,
};

export const userRoles = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type UserRole = keyof typeof userRoles;
