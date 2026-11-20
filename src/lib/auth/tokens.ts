import {
  createHmac,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from "crypto";

function getSecret() {
  const secret = process.env.AUTH_SECRET;

  if (!secret || secret.length < 64) {
    throw new Error("AUTH_SECRET must contain at least 64 characters.");
  }

  return secret;
}

export function generateOTP() {
  return randomInt(0, 1_000_000)
    .toString()
    .padStart(6, "0");
}

export function generateSessionToken() {
  return randomBytes(32).toString("hex");
}

export function generateResetToken() {
  return randomBytes(32).toString("hex");
}

export function hashToken(token: string) {
  return createHmac("sha256", getSecret())
    .update(token)
    .digest("hex");
}

export function verifyTokenHash(
  token: string,
  storedHash: string,
) {
  const calculated = Buffer.from(hashToken(token), "hex");
  const stored = Buffer.from(storedHash, "hex");

  return (
    calculated.length === stored.length &&
    timingSafeEqual(calculated, stored)
  );
}
