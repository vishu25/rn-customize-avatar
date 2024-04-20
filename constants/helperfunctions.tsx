export function isColorDark(hexColor: string): Boolean {
  // Remove '#' if present
  // hexColor = `#${hexColor}`
  hexColor = hexColor.replace('#', '');

  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Determine if color is dark or light based on luminance threshold
  return luminance < 128;
}
