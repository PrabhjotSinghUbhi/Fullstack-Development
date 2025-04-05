# ♾️React

---

## 🔁 Why React?

- Component-based: Build once, reuse anywhere.

- Declarative: You describe what you want to see, React figures out how to do it.

* Fast & Efficient: Uses a virtual DOM for better performance.
  ---~

## 👍Create a react app

```
 npm create vite@latest 
```

- This will create a new folder called hello-react with everything set up.

```
cd my-react-app
```

```
npm install
```

- This will open your browser at http://localhost:3000 and show your React app.

## 👍Integrating tailwind with vite react.
```
 npm install tailwindcss @tailwindcss/vite
```
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // add imports
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),], // use the imports
})

```
  