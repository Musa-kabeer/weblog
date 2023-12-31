import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
      /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

    /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* Blue */
  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;

  /* Red */
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
    transition: all .3s ease-in-out;
}

html {
  font-size: 50.5%;
}

body {
  font-family: 'Red Hat Display', sans-serif;
  color: var(--color-grey-100);

  transition: color 0.3s; 
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background: var(--color-grey-50);

  transition: all .3s ease-in-out;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  font-family: 'Red Hat Display', sans-serif;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-200);
  outline-offset: -1px;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  /* overflow-wrap: break-word;
  hyphens: auto; */
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}


#root{
  width: 100%;
}
`;

export default GlobalStyles;
