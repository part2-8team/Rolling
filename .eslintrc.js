module.exports = {
  root: true,
  env: { browser: true, es2021: true }, //  브라우저 환경 및 ES2021 환경 설정

  extends: [
    "airbnb",
    "eslint:recommended", // ESLint의 기본 권장 규칙 사용
    "plugin:react-hooks/recommended", // React Hooks 규칙 사용
    "prettier", // prettier의 설정들을 포함
  ],
  overrides: [
    // 특정 파일 또는 파일 패턴에 대해 다른 ESLint 설정을 적용하려는 경우 사용
    {
      env: {
        node: true, // 오버라이드에서 적용할 환경 설정 : Node.js 환경을 활성화
      },
      files: [".eslintrc.{js,cjs}"], // 오버라이드가 적용될 파일 또는 파일 패턴의 배열 : .eslintrc.{js,cjs} 파일에만 오버라이드 설정이 적용
      parserOptions: {
        sourceType: "script", // 오버라이드에서 사용할 파서 옵션 : sourceType을 "script"로 설정
      },
    },
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // ESLint 무시할 파일 또는 디렉토리 설정
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off", // React 변수가 JSX 스코프 내에 있어야 하는 규칙을 비활성화
    "react/prop-types": "off", // React 컴포넌트의 prop 유형 검사 규칙을 비활성화
    "no-unused-vars": "off", // 사용되지 않은 변수에 대한 경고를 비활성화
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ], // React 컴포넌트는 오직 컴포넌트만 내보내야 합니다.
  },
};
