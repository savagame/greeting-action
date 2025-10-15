import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { builtinModules } from "module";

const config = {
  input: "src/index.js",
  output: {
    esModule: true,
    file: "dist/index.js",
    format: "es",
    sourcemap: true,
  },
  external: [...builtinModules, "@actions/core", "@actions/github"],
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true })],
  onwarn(warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};

export default config;
