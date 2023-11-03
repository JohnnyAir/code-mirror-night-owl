import typescript from "rollup-plugin-typescript2";

const getBuildConfig = (file) => {
  return {
    input: `${file}.ts`,
    output: [
      {
        file: `./dist/${file}.js`,
        format: "es",
      },
      {
        file: `./dist/${file}.cjs`,
        format: "cjs",
      },
    ],
    plugins: [typescript()],
    external: (id) => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
  };
};

export default [
  getBuildConfig("index"),
  getBuildConfig("./themes/night-owl"),
  getBuildConfig("./themes/night-owl-light"),
];
