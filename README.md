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

Every push to the `master` branch builds the React app and deploys the `build` folder to the live Firebase Hosting site.

Before GitHub Actions can deploy, add a Firebase service account to the GitHub repository secrets:

1. Open Firebase project settings:

```text
https://console.firebase.google.com/project/netflix-clone-ef75a/settings/serviceaccounts/adminsdk
```

2. Click `Generate new private key`.

3. Download the JSON file.

4. Open the GitHub repository:

```text
https://github.com/Levani1111/netflix-clone
```

5. Go to `Settings` > `Secrets and variables` > `Actions`.

6. Add a new repository secret:

```text
Name: FIREBASE_SERVICE_ACCOUNT_NETFLIX_CLONE_EF75A
Value: paste the full JSON content from the private key file
```

7. Push to `master`:

```bash
git push origin master
```

GitHub Actions will then run:

```bash
npm ci
npm run build
FirebaseExtended/action-hosting-deploy@v0
```

#### Deployed:

https://netflix-clone-ef75a.web.app/

###### Author

Levani Papashvili @2020
