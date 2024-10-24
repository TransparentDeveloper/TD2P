# @repo/prettier-config
_prettier 공유설정_


## 사용법 (2가지 제시)

### 1. 각 프로젝트의 `package.json` 에 추가.!

```json
// 📍 package.json

{
  "prettier": "@repo/prettier-config"
}
```

### 2. 프로젝트 루트에 `.prettierrc.js` 파일 생성.!
```js
// 📍 .prettierrc.js

module.exports = require("@repo/prettier-config");
```

<br/>
<br/>

## 설정 옵션

### `semi: false`
- 세미클론 미사용

```js
// ❌ 미설정시
const a = 1;

// ✅ 설정시
const a = 1
```

<br/>

### `jsxSingleQuote: false`
- JSX 문법에서 홑따옴표(') 미사용

```jsx
// ❌ 미설정시
<button className='btn'>클릭하세요</button>

// ✅ 설정시
<button className="btn">클릭하세요</button>
```

<br/>

### `singleQuote: true`
- 일반 문자열에 홑따옴표(') 사용

```js
// ❌ 미설정시
const name = "Alice";

// ✅ 설정시
const name = 'Alice';
```

<br/>

### `trailingComma: "all"`
- 가능한 모든 곳에 후행 쉼표 추가

```js
// ❌ 미설정시
const obj = {
  a: 1,
  b: 2
};

// ✅ 설정시
const obj = {
  a: 1,
  b: 2,
};
```

<br/>

### `arrowParens: "always"`
- 화살표 함수 매개변수에 항상 괄호 사용

```js
// ❌ 미설정시
x => x * x

// ✅ 설정시
(x) => x * x
```

<br/>

### `printWidth: 80`
- 줄 길이 80자로 제한

<br/>

### `tabWidth: 2`
- 들여쓰기에 공백 2칸 사용

<br/>

### `endOfLine: "lf"`
- 줄 끝에 LF(Line Feed) 사용

<br/>

### `bracketSpacing: true`
- 객체 리터럴의 중괄호 내부에 공백 추가

```js
// ❌ 미설정시
const obj = {a:1, b:2};

// ✅ 설정시
const obj = { a: 1, b: 2 };
```

<br/>

### `bracketSameLine: false`
- 여러 줄의 HTML 요소에서 닫는 꺾쇠를 다음 줄에 배치

```jsx
// ❌ 미설정시
<button
  className="btn"
  onClick={handleClick}>
  클릭하세요
</button>

// ✅ 설정시
<button
  className="btn"
  onClick={handleClick}
>
  클릭하세요
</button>
```

<br/>

### `proseWrap: "preserve"`
- 마크다운 파일의 줄 바꿈 유지

<br/>

### `htmlWhitespaceSensitivity: "css"`
- HTML 포맷팅에서 CSS display 속성 고려

<br/>

### `embeddedLanguageFormatting: "auto"`
- HTML 내의 CSS 등 임베디드 코드 자동 포맷팅

```html
<!-- ❌ 미설정시 -->
<style>
.class { color: red; }
</style>

<!-- ✅ 설정시 -->
<style>
.class {
  color: red;
}
</style>
```

<br/>