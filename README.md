# netflix-clone

This is my Netflix clone using the TMDB API. It lets you browse movies and shows by category and watch trailers.

## Tech

- REACTJS
- MATERIAL UI
- HTML
- CSS
- FLEXBOX
- JavaScript
- TMDB - API calls to a movie service
- Deployed on Firebase Hosting

## How to Start the Project

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm start
```

3. Open the app in your browser:

```text
http://localhost:3000
```

To create a production build, run:

```bash
npm run build
```

## Deploy to Firebase

This project is deployed with Firebase Hosting.

Project ID:

```text
netflix-clone-ef75a
```

Manual deploy from your computer:

```bash
npm install
npm run build
firebase login
firebase deploy --only hosting
```

## Deploy from GitHub

The repository includes a GitHub Actions workflow at:

```text
.github/workflows/firebase-hosting.yml
```

Every push to the `master` branch builds the React app and deploys the `build` folder to Firebase Hosting.

Before GitHub Actions can deploy, add a Firebase token to the GitHub repository secrets:

1. Generate a Firebase CI token locally:

```bash
firebase login:ci
```

2. Copy the generated token.

3. Open the GitHub repository:

```text
https://github.com/Levani1111/netflix-clone
```

4. Go to `Settings` > `Secrets and variables` > `Actions`.

5. Add a new repository secret:

```text
Name: FIREBASE_TOKEN
Value: paste the token from firebase login:ci
```

6. Push to `master`:

```bash
git push origin master
```

GitHub Actions will then run:

```bash
npm ci
npm run build
npx firebase-tools deploy --only hosting --project netflix-clone-ef75a
```

#### Deployed:

https://netflix-clone-ef75a.web.app/

###### Author

Levani Papashvili @2020
