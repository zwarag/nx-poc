To create a new scheamtic (which are called generators in `nx`) run:

```
npx nx generate @nrwl/workspace:workspace-schematic new-library-name
```

To generate a `schema.d.ts` from your schema.json run:

```
npx -p dtsgenerator dtsgen schema.json -o schema.d.ts
```

To execute the scheamtic run:

```
npx nx workspace-generator component-secondary --project=lib-core newComponentName
```
