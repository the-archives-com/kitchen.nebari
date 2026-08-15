# Nebari Recipes

This is the current working source for the Nebari Recipes website and installable cooking app.

## Put it on your Mac

1. Download and unzip `nebari-recipes-source.zip`.
2. Open Terminal.
3. Create your projects folder if needed:

   ```bash
   mkdir -p ~/projects
   ```

4. Move the unzipped `nebari-recipes` folder into `~/projects`.
5. In Terminal, run:

   ```bash
   cd ~/projects/nebari-recipes
   npm install
   npm run dev
   ```

6. Open the local address shown in Terminal, normally `http://localhost:3000`.

Stop the app by returning to Terminal and pressing **Control+C**.

## Where the recipes live

The current recipes and cooking steps are in:

```
app/page.tsx
```

The visual styling is in:

```
app/globals.css
```

## Important

This package is an exact copy of the currently hosted ChatGPT Sites project. Keep the live site in place while testing this local copy. Before deploying through Vercel, we will convert the hosting-specific configuration into a standard Next.js project and place it in GitHub.
