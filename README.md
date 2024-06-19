
# KP Components

KP Components is a UI library built with TypeScript, providing a set of reusable components and theming capabilities using Material-UI and design tokens.

## Installation

Install the library using npm:

```sh
npm install kp-components
```

## Usage

### Theming

KP Components provides a `KPThemeProvider` to manage theming. You can use it to wrap your application and provide the desired theme.

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, KPThemeProvider } from 'kp-components';

const App: React.FC = () => {
  return (
    <KPThemeProvider>
      <div style={{ padding: '20px' }}>
        <Button types="primary">Primary Button</Button>
        <Button types="secondary">Secondary Button</Button>
      </div>
    </KPThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Components

#### Button

KP Components includes a customizable Button component. You can use it by importing and using it within your React components.

```typescript
import React from 'react';
import { Button } from 'kp-components';

const MyComponent: React.FC = () => {
  return (
    <div>
      <Button types="primary">Primary Button</Button>
      <Button types="secondary">Secondary Button</Button>
    </div>
  );
};
```

### Theming Configuration

KP Components uses design tokens to manage themes. You can customize the themes by modifying the JSON files in the `theme` folder.

- `custom-theme.json`
- `default-dark.json`
- `default-light.json`

These files define the properties of the themes used by the `KPThemeProvider`.

### KPThemeProvider

The `KPThemeProvider` is a context provider that allows you to toggle between different themes and set a specific theme.

```typescript
import React from 'react';
import { useKPTheme } from 'kp-components';

const MyComponent: React.FC = () => {
  const { toggleTheme, setTheme, theme, themeName } = useKPTheme();

  return (
    <div>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
      <button onClick={() => setTheme('light')}>Set Light Theme</button>
      <button onClick={() => setTheme('custom')}>Set Custom Theme</button>
    </div>
  );
};
```

## Contributing

If you would like to contribute to KP Components, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Open a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors

- [Your Name](https://github.com/your-github-username)
