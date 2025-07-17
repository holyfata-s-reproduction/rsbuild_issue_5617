# RSBUILD_ISSUE_5617

The environment variables can be used in web and node.

```typescript
try {
  console.log(import.meta.env.PUBLIC_TEST);
  console.log(import.meta.env.TEST);
} catch (error) { console.error(error) }
```

![alt text](image.png)

![alt text](image-1.png)

But the type-check is only useful in web.

![alt text](image-2.png)

![alt text](image-3.png)
