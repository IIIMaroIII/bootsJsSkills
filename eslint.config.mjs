// @ts-check

import eslint from "@eslint/js";
import tseslint, { parser } from "typescript-eslint";
import tsEslintParser from "@typescript-eslint/parser";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error"], // Запрет на неиспользуемые переменные
      "@typescript-eslint/no-explicit-any": "error", // Запрет на использование any
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Требует явного указания типов
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Использовать интерфейсы для определения типов
      "@typescript-eslint/no-inferrable-types": "off", // Отключить неявное указание типов
      "@typescript-eslint/no-unsafe-assignment": "error", // Запрет на небезопасные присвоения
      "@typescript-eslint/explicit-function-return-type": ["warn"], // Требует явного указания возвращаемого типа
      indent: ["error", 2], // Установка отступов
      "prefer-const": "error", // Рекомендует использовать const
      curly: ["error", "all"], // Требует использования фигурных скобок для всех условий
      "no-extra-boolean-cast": "error", // Запрет на лишние преобразования к булевым значениям
      "no-duplicate-imports": "error", // Запрет на дублирующие импорты
      "no-console": "warn", // Предупреждает об использовании console},
    },
    ignores: ["node_modules/", "dist/", "**/*.spec.ts"],
  },
  {
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
  }
);
