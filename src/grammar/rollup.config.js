import typescript from "rollup-plugin-ts"
import {lezer} from "@lezer/generator/rollup"

export default {
  input: "src/grammar/index.ts",
  external: id => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
  output: [
    {dir: "src/scripts", format: "es"}
  ],
  plugins: [lezer(), typescript()]
}

