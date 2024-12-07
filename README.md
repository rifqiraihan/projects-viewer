# GitHub Projects Viewer

## 🚨 Important Notice

Please be aware that the GitHub authentication token used in this project is set to expire on **January 5, 2025**. After this date, you will need to generate a new token to continue using the app without encountering authentication issues.

### Steps to Update Your GitHub Token:
1. Go to the [GitHub Developer Settings](https://github.com/settings/tokens) page.
2. Click **Generate new token**, and select the necessary permissions required for this project.
3. Once the new token is created, update the token in your `.env` file or wherever it's being used in the project.

You can find the `.env` file in the root directory of this project and update the `VITE_REACT_APP_GITHUB_TOKEN` variable with your new token.

---

## 
✨ Features
- View repositories from any GitHub user
- View README of selected repositories
- Search for repositories by username

Deployment
The project is deployed on Netlify: [Live Demo](https://projects-viewer-rifqi.netlify.app/)
