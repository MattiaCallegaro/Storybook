# Boolean Design System

## Link utili
- https://www.bbc.com/gel/guidelines
- https://www.wix.com/studio/blog/design-system-examples#viewer-3ndfl
- https://fluent2.microsoft.design
- https://storybook.bento-ds.com/
- https://components.tot.money/?path=/docs/intro--docs

## Tool per Design System

- https://storybook.js.org/docs
- https://docusaurus.io

## Installiamo Storybook

`npx storybook@latest init`

Scegliamo come framework React e Vite quando ci viene hiesto il project type oppure installiamo Vite e React manualmente con

`npm install vite react react-dom --save-dev`

Lanciamo il comando `npm run storybook` ci verrà chiesto di sciegliere un port per lo Storybook, sciegliamo 6006.
Avremo sul nostro browser la nostra prima pagina di Storybook.

## Utilizzare Typescript

`npm install @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript`

Creiamo nella root di progetto un file `tsconfig.json` con il seguente contenuto: 
`json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "types": ["vite/client", "storybook__react"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", ".storybook"]
}
`
