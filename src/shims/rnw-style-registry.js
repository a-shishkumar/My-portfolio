// Shim for `react-native-web/dist/apis/StyleSheet/registry`
// This provides a minimal `resolve` implementation expected by `react-bits`.
// It uses the public `StyleSheet` API from `react-native-web` to flatten/resolve
// style objects at runtime.

import { StyleSheet } from "react-native-web";

const StyleRegistry = {
  // Return a plain object representing the resolved style.
  // If nothing can be resolved, return null to match the original API usage.
  resolve(style) {
    if (style == null) return null;
    // Prefer the flatten utility if available
    if (StyleSheet && typeof StyleSheet.flatten === "function") {
      try {
        return StyleSheet.flatten(style) || null;
      } catch {
        // Fallback to returning the input style if flatten fails
        return style || null;
      }
    }
    // Last resort: assume style is already plain object
    return style || null;
  },
};

export default StyleRegistry;
