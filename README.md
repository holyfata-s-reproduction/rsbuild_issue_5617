# RSBUILD_ISSUE_5617

```bash
# node18
bun install
bun run dev
```

### The environment variables can be used in web and node.

```typescript
try {
  console.log(import.meta.env.PUBLIC_TEST);
  console.log(import.meta.env.TEST);
} catch (error) { console.error(error) }
```

**# Web** 
![alt text](image.png)

**# Node** 
![alt text](image-1.png)

### But the type-check is only useful in web.

**# index.ts** 
![alt text](image-2.png)

**# rsbuild.config.ts** 
![alt text](image-3.png)
