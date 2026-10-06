/** Canonical customer key: Taiwan mobiles use 09…, other countries use +country-code. */
export function normalizeCustomerPhone(value: unknown): string | null {
  if (typeof value !== "string") return null;
  let phone = value.normalize("NFKC").replace(/[\s()-]/g, "");
  if (phone.startsWith("+886")) phone = `0${phone.slice(4)}`;
  if (/^09\d{8}$/.test(phone)) return phone;
  if (!phone.startsWith("+886") && /^\+[1-9]\d{7,14}$/.test(phone)) return phone;
  return null;
}

export const customerPhoneError = "請填寫有效手機號碼，例如 0912345678；海外號碼請包含 +國碼。";
