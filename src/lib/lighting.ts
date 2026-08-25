import type { LampType } from "@prisma/client";

export const lampTypes: { label: string; value: LampType }[] = [
  { label: "光明燈", value: "BRIGHT" },
  { label: "姻緣燈", value: "LOVE" },
  { label: "藥師燈", value: "MEDICINE_BUDDHA" },
  { label: "開悟燈", value: "ENLIGHTENMENT" },
  { label: "招財燈", value: "WEALTH" },
  { label: "女媧燈", value: "NUWA" }
];

export const lampTypeValues = new Set<LampType>(lampTypes.map((lamp) => lamp.value));

export function isLampType(value: unknown): value is LampType {
  return typeof value === "string" && lampTypeValues.has(value as LampType);
}
