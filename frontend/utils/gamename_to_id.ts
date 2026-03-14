export function convertGameNameToId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "_");
}