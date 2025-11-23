import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// `package.json` uses "type": "module", so compute __dirname the ESM way.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Alias the missing internal path used by `react-bits` to a local shim that
// provides a compatible `resolve` API. This avoids modifying node_modules
// and keeps the fix local to this project.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "react-native-web/dist/apis/StyleSheet/registry": path.resolve(
        __dirname,
        "src/shims/rnw-style-registry.js"
      ),
    },
  },
});
