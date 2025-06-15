import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Incluye archivos TypeScript
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser, // Usa el parser de TypeScript
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
        project: "./tsconfig.json", // Asegúrate de tener un tsconfig.json
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tsPlugin, // Agrega el plugin de TypeScript
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...tsPlugin.configs.recommended.rules, // Reglas recomendadas para TypeScript
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn"], // Ejemplo de regla específica para TS
      "@typescript-eslint/explicit-module-boundary-types": "off", // Puedes ajustar según tus necesidades
      "react-hooks/rules-of-hooks": "error", // Reglas recomendadas para hooks
      "react-hooks/exhaustive-deps": "warn", // Reglas recomendadas para dependencias
    },
  },
];
