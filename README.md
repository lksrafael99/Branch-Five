# Branch Five - Git & GitHub Project

This is a simple collaborative website created by five CCT College Dublin students to demonstrate Git and GitHub collaboration.

## Team

- Larissa
- Felipe
- Andre
- Luiz
- Lucas

## Project Structure

```text
branch-five/
├── index.html
├── larissa.html
├── felipe.html
├── andre.html
├── luiz.html
├── lucas.html
├── style.css
├── script.js
├── images/
│   └── profile-placeholder.svg
└── README.md
```

- `index.html`: home page, team links and collaboration workflow.
- Each member's HTML file: their profile, photo and personal background colour.
- `style.css`: shared styles and mobile layout.
- `script.js`: home page fade-in and smooth scrolling.
- `images/profile-placeholder.svg`: local placeholder for profile photos.

## Open the Website

Open `index.html` directly in your browser. No server, installation or external library is needed.

## Collaboration Workflow

1. Clone repository.
2. Create branch.
3. Edit your HTML page: change the colour in the body and write your profile text in English.
4. Add your photo to `images/` and update your image's `src`.
5. Commit.
6. Push.
7. Open Pull Request.
8. Merge into main.

## Branch Names

- `larissa-page`
- `felipe-page`
- `andre-page`
- `luiz-page`
- `lucas-page`

## Important

Each team member should edit only their own HTML page during the collaboration exercise.

They can also add their own photo to `images/`. Do not edit another member's page, `style.css` or `script.js`.

The large Portuguese comment in each profile explains the three changes. Smaller comments mark each exact location.

## Git Commands

Lucas can run these later from inside `branch-five/` to prepare the initial repository. Create an empty GitHub repository first, then replace `YOUR-USERNAME` with its owner.

```sh
git init -b main
git add .
git commit -m "Create initial Branch Five website"
git remote add origin https://github.com/YOUR-USERNAME/branch-five.git
git push -u origin main
```

Example for Felipe (replace the repository owner and use your own name, branch and photo filename):

```sh
git clone https://github.com/YOUR-USERNAME/branch-five.git
cd branch-five
git switch -c felipe-page
# Edit felipe.html and add images/felipe.jpg before continuing.
git add felipe.html images/felipe.jpg
git commit -m "Update Felipe profile"
git push -u origin felipe-page
```

On GitHub, open a Pull Request from your branch into `main`. Have the group review the changes, then merge it. Update your local main branch afterwards:

```sh
git switch main
git pull origin main
```

## GitHub Pages

When the group is ready to publish, open the repository's Settings → Pages. Choose deployment from a branch, select `main` and `/ (root)`, then save. This assumes the files in `branch-five/` are at the repository root, with `index.html` beside the README.

No repository, commit, push or publication is performed by these files.
