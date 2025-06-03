# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# Red Flags

Unfortunately, after review of your task by our team, we have decided not to move forward for the the reasons below:
Decided to create all the css classes in one file, which is suboptimal, since they should be inside their respective component/component folder (easier access) .
Single responsibility principle not used, the todo-context is a context and at the same time calls the api services.
Messy code, context calls the api, and then the App component needs to fetch it with a React.useEffect hook (why not do it straight away and avoid it?).
Heading must be responsible to set its own styles, to avoid situations like this <Heading className="notexisting"/>
Button doesn't take into consideration the disable html prop, instead the onClick is not called with a condition.
Heading is not optimal, it received a class h1/h2/ etc, but at the same time it receives a level that sets h1/h2 etc. (also has a prop that is not needed at all 'position').
useTodoSummary(state.todos); why not use the useTodos inside the useTodoSummary?
TodoList, currentTime const is not needed here, should be inside the TodoITem.
useTodoSummary, no need for 2 state variables completed and unCompleted (unCompleted = total - completed).
api url is in a const passed to the TodoProvider.

describe('User', () => {
test('renders heading', async () => {
render(<Users />);
expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
});

test('renders a list of users', async () => {
render(<Users />);
const users = await screen.findAllByRole('listitem');
expect(users).toHaveLength(3);
});
});
