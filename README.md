# Axel Nikea LLP — Corporate Website

A responsive, static corporate website for Axel Nikea LLP, styled around the supplied navy-and-gold brand identity.

## Package contents

- `index.html` — website structure and content
- `styles.css` — responsive styling
- `script.js` — mobile navigation, copyright year and email enquiry form
- `assets/axel-nikea-full-logo.png` — supplied full logo
- `assets/axel-nikea-icon.png` — supplied icon logo
- `assets/favicon.png` — browser icon generated from the supplied icon

## Preview locally

Open `index.html` in a web browser. The site uses Google Fonts; if unavailable, it falls back to system fonts.

## Publish with GitHub Pages

1. Extract this ZIP file.
2. Open your GitHub repository.
3. Upload the contents of the `axel-nikea-website` folder to the repository root. Make sure `index.html` is at the root, not inside an extra nested folder.
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Choose branch **main** and folder **/(root)**, then save.
8. Wait for GitHub Pages to publish the site and open the URL shown there.

## Connect your domain

When ready, add `axelnikea.com` in **Settings → Pages → Custom domain**. Then configure the DNS records at GoDaddy using the current values shown in GitHub's Pages documentation/settings. Keep your domain registration active.

## Contact form behaviour

The enquiry form is intentionally backend-free. It opens the visitor's default email application and prepares an email to:

`axelnikea@gmail.com`

If this is not the public contact address, replace it in both `index.html` and `script.js`.

## Before launch

- Verify the email address and location details.
- Review all service descriptions and company claims.
- Add a privacy notice and terms if required for your intended use.
- The enquiry form does not store submissions; visitors need an email application configured.
