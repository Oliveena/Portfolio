Author: Tarassova Anastassia
Date: 2024-01-18
Version 3.0 --> adding JS

Purpose: Junior developper portfolio for potential workplaces.
User: HR, other students, etc.


------ TODO for final product ------
CASE 1:

1) JQuery highlight of active navbar item    **DONE**
2) Smooth transitions beween pages  **IN PROGRESS, transition is abrupt**

CASE 2: 

3) modal window (for downloading CV, create username, password)  **IN PROGRESS deal with the CV opening too fast**

modal can be closed by ckicking on main window !== modalness; only closed by X
4) event listeners (onclick) **DONE** 
5) smooth transition for onclick events **DONE**
6) accessibility compliance **DONE checked with Lighthouse**
7) document features and in what do they improve user experience
- images alt descriptions
- aria attribute in the navbar
- aria labels on the dropdown in the navbar and in the modal
- contrasting fonts and backgrounds 
- choice of a simple to read, well-spaced font
- pages in three languages (in progress)

CASE 3: 

8) array of items (testimonials!) **DONE**
9) loops to dynamically generate content (could be a carrousel of reviews)  **DONE**
  OPTIONAL: dropdown menu for projects with JS (three main highlighted, the others in a dropdown menu)
Projects will be an array.
use children, it will be faster for accessing  **DONE**
OPTIONAL: append today's date to the review submitted by user 

CASE 4: 

10) manipulate the DOM dynamically (parent-child, add-remove) **DONE, see table in hobbies**
- JS updates year in footer **DONE**
11) "event-driven DOM-changes"
 **IN PROGRESS: deletion of table elements added by user is wonky, the index of rows/cells is wrong**
 - hoverable walruses  **DONE**
 - OPTIONAL: captions onhover for each painting 
12) visual feedback (color/font changes, animations)  **DONE**
 - show more walruses onclick **DONE**
13) show before-after DOM tree changes (decorating the DOM tree is optional)
use the website Dr. Khattar provided 
https://www.fritscher.ch/dom-css/  

CASE 5: 

14) form validation: regexes, custom messages, valid/invalid thru CSS   **DONE**
 - red/green border when valid/invalid input  ===============TO DO===============
15) test for various edge cases **DONE**

CASE 6 :

16) populate table with array (array of book reviews) **DONE**
17) add form for adding new elements ('Do you have book suggestion for me?') **DONE**
18) allow editing and deleting THEIR rows **DONE**
- use local storage to persist data **DONE**

CASE 7:  (overlaps with case 2: modal)

19) create a feedback form with rating options ('What do you think of my website?')  **DONE**
- store user feedback in an array or object 
  - text **DONE**
  - OTIONAL: start
 - use local storage to retain feedback **DONE**
 - display summarized results dynamically  **DONE, in the welcome-page carrousel**

CASE 8:

20) 
 - fontsize, colors (greyscale) **DONE, walruses**
 - dark mode, light mode              
 - use Lighthouse for validation **DONE**
 - From Dr. Khattar: https://www.w3.org/WAI/ 
 - UI/UX eval in Team 6 - report feedback  **DONE, good reviews**
 VERY OPTIONAL: ASL/LSQ  translation ressources 

CASE 9: 

 - AJAX: fetch data from Google Books API https://developers.google.com/books/docs/v1/getting_started **DONE**
 -- Ana's API key AIzaSyBz1eVKan_8rxl22fXIThv75xcL4Q0yepY  **DONE**
 OPTIONAL: use geolocation (user permission)
 OPTIONAL: CSS changes related to weather 
 - implement error handling for failed API calls 
 - document API usage and integration process: 
1) considered non Google APIs
2) read about Google API and services
3) hesitated between weather and books API 
4) didn't figure an elegant place to plug in a weather API, decided on books
5) created my first project with Google Cloud
6) chose the option for individual use of API 
7) implemented it on my page
8) formated the Bootstrap  
- Challenges: dense, abstract documentation. 
- Qualities: very useful tool. Great diversity of uses. Can be customized Can fetch whatever your heart desires. 

- use AJAX for a carrousel **DONE** 
 OPTIONAL: used AJAX to update contnts except for navbar + footer **DONE** 
 OPTIONAL: a "Why walruses? button that fetches some txt from .txt
 https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_first 

 CASE 10:

 - implement jQuery library (in previous steps)  **DONE in case 2 and 3 at least**
 - Compare native JavaScript vs. library-based implementation ======== in progress: Vanilla JS carrousel for painting progression ====== 
 - Ensure integration with the existing project UI  **DONE all is responsive**
 - Document challenges and solutions encountered (README.md, structure, Team Leadm Designer, Dev) 
 
 - challenge: fixing issues from previous submission
 - solution: 2 days of elbow grease, trial and error, debugging (issue was in _reset.scss mostly)

 - challenge: assimilating material from the entire course
 - solution: 1.5 days re-reading my notes in Obsidian (software), reviewing lectures, re-reading labs.
 (usage of tags and graph view is a godsend for quickly navigating/searching terms)

 - challenge: jQuery notes were difficult to assimilate
 - solution: TUTORIALS: https://www.tutorialsteacher.com/jquery/jquery-ajax-method, https://www.geeksforgeeks.org/jquery-tutorial/, all the W3School resosurces   3 days of trial and error

 - challenge: JSON syntax was surprisingly hard to memorize
 - solution: constantly consulting this page and the class notes https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON while working with the book table (parse and stringify where particularly rough to remember)       half a day just to populate the table approriately

 - challenge: I targeted .form instead of #each-forms-unique-ID in scripts, unrelated alerts() all the time
 - solution: rewriting the scripts with proper targeting of element 1 by 1

 - challenge: making everything aria-friendly 
 - solution: going throught the examples on https://www.w3.org/WAI/ARIA/apg/patterns/ 

 - challenge: looking into how to split my massive JS script
 - solution: looked into https://webpack.js.org/guides/asset-management/, too short on time to learn it post-presentation
  looked into modules https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules, same matter of limited time before project submission 
 - decided to load all separate scripts into one main.js file that will get called on every webpage

- challenge: time mgmt
 - solution: timed 30 min breaks, caffeine, moral support from friends, family and Team 6 members

 - validate all HTML  **DONE**

 Forms should be very accessible. ACCESSIBLITY, ACCESSIBILITY, ACCESSIBILITY. 
 Gitignore, since we talked about it. ========== TO DO ============ 

-------------------------------NOT GRADED: 
- remove CORS adaptation from headers for Bootstrap  **DONE**

- fix navbar not displaying dropdowns accurately **DONE**
for styling navbar on cellphones https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar

- add language dropdown efficiently **DONE**

- add some CSS with JQuery **DONE, walruses** 
 OPTIONAL: add a font/color randomizer for a page? 

- add Bootstrap grid styling to the walruses in Hobbies **DONE**

- fix responsiveness on other pages (test in Mozilla, I'm using Ecosia) **DONE**

- translate all FR and RU pages **IN PROGRESS**

- Ctrl-K Ctrl-F every HTML and JS page **DONE**

- edit ICA 2 and join it to Hobbies page 

- create a layout for printers 

- incorporate better .scss into it

- incorporate better mixins and variables 

- make sure the SCSS is nested properly 


OPTIONAL: https://codeshack.io/20-useful-jquery-snippets/ 
===============================

Colors are mapped. 
$colors: (
  eggshell: #ddfff7,
  beige: #d8c99b,
  yellow: #f2c078,
  gold: #d8973c,
  brown: #9c4764,
  red: #a4243b,
  bloodstone: #273e47,
  lilac: #7d83ff,
  light-blue: #5688c7,
  navy-blue: #150578,
  pink: #ba71fe,
  light-pink: #f57daa
);


------ Tools used ------

Browser: Ecosia Desktop  https://www.ecosia.org/ 

https://coolors.co/image-picker for genereating a color scheme 

https://www.figma.com/design/1mGFUZZd7ygwKbG1AEhaRw/Untitled?node-id=0-1&p=f&t=31NGbtUm7tc3cDaA-0 for building a mock-up

https://autoprefixer.github.io/ for adding vendor specific prefixes to scss

https://favicon.io/favicon-converter/ for favicons

https://bioub.github.io/dom-visualizer/ for DOM tree visualization 


```
TARASSOVA_Anastassia_Portfolio_final_to_be_continued
├─ .idea
│  ├─ libraries
│  │  └─ walrus_favicon_io.xml
│  ├─ misc.xml
│  ├─ modules.xml
│  ├─ vcs.xml
│  └─ workspace.xml
├─ dist
│  └─ css
│     ├─ main.css
│     └─ main.css.map
├─ my-portfolio
│  ├─ .next
│  │  ├─ cache
│  │  │  ├─ .rscinfo
│  │  │  ├─ eslint
│  │  │  │  └─ .cache_wj3d1e
│  │  │  ├─ images
│  │  │  │  ├─ cUwdh0VVVwBDOZwNg8gj2n8ZvxyUiPhOAfHyOg2oNe0
│  │  │  │  │  └─ 60.1750104103558.ppbZA7u97jUn8nWjloCZqDfCEmJYukQFiEG155s02Ls.Vy8iMTVhNDItMTk3MDc3OTA3Mzgi.webp
│  │  │  │  ├─ I0uU3gfVVXr1YTrVbDvr8YW8TRpeSVRC-SI78MqAoBE
│  │  │  │  │  └─ 60.1750101936362.U583z3hINgTqrHg0Jf8KWG2VaBMuQEAtrFq8U2qvt7k.Vy8iMWFhZGUtMTk3MDc3OTA3NGEi.webp
│  │  │  │  ├─ nUf32ht6n0Fh6JsvgJTpGETbOHCS1KpLy-KqP6ZE9vg
│  │  │  │  │  └─ 60.1750104103557.sNOMMzdU6foED8E14vyxuw1jJTNKBD9krjlSkOHdVpQ.Vy8iMWFhZGUtMTk3MDc3OTA3NGEi.webp
│  │  │  │  ├─ VOPLsoZUZPPwDZ8sQCcGBOv2czjPoyA2T30UN1fKfrM
│  │  │  │  │  └─ 60.1750101938176.WijRsLGImdyNWR4ICX72qdbjIn7BqHZyYRi3zBDNngs.Vy8iMWFhZGUtMTk3MDc3OTA3NGEi.webp
│  │  │  │  └─ zMvydjMwiJxI8RGlHo0RAUv-YqY8U_svICThCijMhBk
│  │  │  │     └─ 60.1750100354038.NpQdQNbILVKw704vxAs9eMkjnvqzdXIM43LonhPASS0.Vy8iMWFhZGUtMTk3MDc3OTA3NGEi.webp
│  │  │  ├─ swc
│  │  │  │  └─ plugins
│  │  │  │     └─ v7_windows_x86_64_9.0.0
│  │  │  └─ webpack
│  │  │     ├─ client-development
│  │  │     │  ├─ 0.pack.gz
│  │  │     │  ├─ 1.pack.gz
│  │  │     │  ├─ 10.pack.gz
│  │  │     │  ├─ 11.pack.gz
│  │  │     │  ├─ 12.pack.gz
│  │  │     │  ├─ 2.pack.gz
│  │  │     │  ├─ 3.pack.gz
│  │  │     │  ├─ 4.pack.gz
│  │  │     │  ├─ 5.pack.gz
│  │  │     │  ├─ 6.pack.gz
│  │  │     │  ├─ 7.pack.gz
│  │  │     │  ├─ 8.pack.gz
│  │  │     │  ├─ 9.pack.gz
│  │  │     │  ├─ index.pack.gz
│  │  │     │  └─ index.pack.gz.old
│  │  │     ├─ client-production
│  │  │     │  ├─ 0.pack
│  │  │     │  ├─ 1.pack
│  │  │     │  ├─ 10.pack
│  │  │     │  ├─ 11.pack
│  │  │     │  ├─ 12.pack
│  │  │     │  ├─ 13.pack
│  │  │     │  ├─ 14.pack
│  │  │     │  ├─ 15.pack
│  │  │     │  ├─ 16.pack
│  │  │     │  ├─ 17.pack
│  │  │     │  ├─ 18.pack
│  │  │     │  ├─ 19.pack
│  │  │     │  ├─ 2.pack
│  │  │     │  ├─ 20.pack
│  │  │     │  ├─ 21.pack
│  │  │     │  ├─ 22.pack
│  │  │     │  ├─ 23.pack
│  │  │     │  ├─ 24.pack
│  │  │     │  ├─ 25.pack
│  │  │     │  ├─ 26.pack
│  │  │     │  ├─ 3.pack
│  │  │     │  ├─ 4.pack
│  │  │     │  ├─ 5.pack
│  │  │     │  ├─ 6.pack
│  │  │     │  ├─ 7.pack
│  │  │     │  ├─ 8.pack
│  │  │     │  ├─ 9.pack
│  │  │     │  ├─ index.pack
│  │  │     │  └─ index.pack.old
│  │  │     ├─ edge-server-production
│  │  │     │  ├─ 0.pack
│  │  │     │  └─ index.pack
│  │  │     ├─ server-development
│  │  │     │  ├─ 0.pack.gz
│  │  │     │  ├─ 1.pack.gz
│  │  │     │  ├─ 10.pack.gz
│  │  │     │  ├─ 11.pack.gz
│  │  │     │  ├─ 12.pack.gz
│  │  │     │  ├─ 13.pack.gz
│  │  │     │  ├─ 2.pack.gz
│  │  │     │  ├─ 3.pack.gz
│  │  │     │  ├─ 4.pack.gz
│  │  │     │  ├─ 5.pack.gz
│  │  │     │  ├─ 6.pack.gz
│  │  │     │  ├─ 7.pack.gz
│  │  │     │  ├─ 8.pack.gz
│  │  │     │  ├─ 9.pack.gz
│  │  │     │  ├─ index.pack.gz
│  │  │     │  └─ index.pack.gz.old
│  │  │     └─ server-production
│  │  │        ├─ 0.pack
│  │  │        ├─ 1.pack
│  │  │        ├─ 10.pack
│  │  │        ├─ 11.pack
│  │  │        ├─ 12.pack
│  │  │        ├─ 13.pack
│  │  │        ├─ 14.pack
│  │  │        ├─ 15.pack
│  │  │        ├─ 16.pack
│  │  │        ├─ 17.pack
│  │  │        ├─ 18.pack
│  │  │        ├─ 19.pack
│  │  │        ├─ 2.pack
│  │  │        ├─ 20.pack
│  │  │        ├─ 21.pack
│  │  │        ├─ 22.pack
│  │  │        ├─ 23.pack
│  │  │        ├─ 24.pack
│  │  │        ├─ 25.pack
│  │  │        ├─ 26.pack
│  │  │        ├─ 27.pack
│  │  │        ├─ 28.pack
│  │  │        ├─ 3.pack
│  │  │        ├─ 4.pack
│  │  │        ├─ 5.pack
│  │  │        ├─ 6.pack
│  │  │        ├─ 7.pack
│  │  │        ├─ 8.pack
│  │  │        ├─ 9.pack
│  │  │        ├─ index.pack
│  │  │        └─ index.pack.old
│  │  ├─ diagnostics
│  │  │  ├─ build-diagnostics.json
│  │  │  └─ framework.json
│  │  ├─ package.json
│  │  ├─ server
│  │  │  ├─ app
│  │  │  │  ├─ EN
│  │  │  │  │  └─ contact
│  │  │  │  │     ├─ page.js
│  │  │  │  │     └─ page.js.nft.json
│  │  │  │  ├─ favicon.ico
│  │  │  │  │  ├─ route.js
│  │  │  │  │  └─ route.js.nft.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.nft.json
│  │  │  │  └─ _not-found
│  │  │  │     ├─ page.js
│  │  │  │     └─ page.js.nft.json
│  │  │  ├─ app-paths-manifest.json
│  │  │  ├─ chunks
│  │  │  │  ├─ 447.js
│  │  │  │  ├─ 548.js
│  │  │  │  ├─ 658.js
│  │  │  │  └─ 772.js
│  │  │  ├─ pages
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _app.js.nft.json
│  │  │  │  ├─ _document.js
│  │  │  │  ├─ _document.js.nft.json
│  │  │  │  ├─ _error.js
│  │  │  │  └─ _error.js.nft.json
│  │  │  ├─ pages-manifest.json
│  │  │  ├─ server-reference-manifest.js
│  │  │  ├─ server-reference-manifest.json
│  │  │  └─ webpack-runtime.js
│  │  ├─ trace
│  │  └─ types
│  │     ├─ app
│  │     │  ├─ EN
│  │     │  │  └─ contact
│  │     │  │     └─ page.ts
│  │     │  ├─ layout.ts
│  │     │  └─ page.ts
│  │     ├─ cache-life.d.ts
│  │     └─ package.json
│  ├─ eslint.config.mjs
│  ├─ jsconfig.json
│  ├─ next.config.mjs
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ documents
│  │  │  ├─ 2024_Inf_Clin_CV_FR.pdf
│  │  │  ├─ 20250328124727_RemaxClone.pptx
│  │  │  └─ WebServicesPwP2 1.pptx
│  │  ├─ favicon.ico
│  │  ├─ file.svg
│  │  ├─ globe.svg
│  │  ├─ images
│  │  │  ├─ 1037--65505-800-u6q.jpg
│  │  │  ├─ 1725819461instagram-logo.png
│  │  │  ├─ 198747823f13e13270c6c8b87d0b1036a7631e78.jpeg
│  │  │  ├─ 20250111_095825.jpg
│  │  │  ├─ 20250111_095921.jpg
│  │  │  ├─ 20250111_100225.jpg
│  │  │  ├─ 20250111_100242.jpg
│  │  │  ├─ 2062376.png
│  │  │  ├─ 9781477319642.jpg
│  │  │  ├─ 9781844081813-uk.jpg
│  │  │  ├─ 9782894064993_large.webp
│  │  │  ├─ 98ae159aa1bb8b4243fbe1f9e27d1b9f.png
│  │  │  ├─ Ahabs-Wife.jpg
│  │  │  ├─ auctions.png
│  │  │  ├─ aws-academy-graduate-aws-academy-cloud-security-foundations.png
│  │  │  ├─ BonjourSante.png
│  │  │  ├─ bootstrap-logo-png-bootstrap-logo-390.png
│  │  │  ├─ chateaux-de-la-colere-folio-livre-occasion-29825_1.jpg
│  │  │  ├─ css3-logo-png-transparent.png
│  │  │  ├─ DeansList.png
│  │  │  ├─ Enchantress_of_florence.jpg
│  │  │  ├─ f7ad9720-7002-4c57-8d44-0405b7e00ee2.jpg
│  │  │  ├─ FCC.jpg
│  │  │  ├─ figma.png
│  │  │  ├─ github-mark.png
│  │  │  ├─ goodnight-punpun-vol-1-9781421586205_hr.jpg
│  │  │  ├─ html-logo.png
│  │  │  ├─ icons8-home-64.png
│  │  │  ├─ IMG_20210131_221746_948.jpg
│  │  │  ├─ IMG_20210208_090255_351.jpg
│  │  │  ├─ IMG_20210217_090313_884.jpg
│  │  │  ├─ java.png
│  │  │  ├─ javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png
│  │  │  ├─ jpeg.webp
│  │  │  ├─ laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png
│  │  │  ├─ LaravelPortfolio.png
│  │  │  ├─ linkedin-logo-linkedin-icon-transparent-free-png.webp
│  │  │  ├─ Meta-Logo.png
│  │  │  ├─ php-logo-bigger.png
│  │  │  ├─ RemaxClone.png
│  │  │  ├─ sql-database-icon-png-17.png
│  │  │  ├─ thumbnail_20240601_143811.jpg
│  │  │  ├─ vector1.jpg
│  │  │  ├─ w3schools-1536.png
│  │  │  ├─ walrus_favicon_io
│  │  │  │  └─ site.webmanifest
│  │  │  ├─ walrus_favicon_io.zip
│  │  │  └─ walrus_progress
│  │  │     ├─ 20250102_173417.jpg
│  │  │     ├─ 20250102_182141.jpg
│  │  │     ├─ 20250102_193255.jpg
│  │  │     ├─ 20250102_194414.jpg
│  │  │     ├─ 20250102_200253.jpg
│  │  │     ├─ 20250102_201236.jpg
│  │  │     └─ 20250108_221350.jpg
│  │  ├─ next.svg
│  │  ├─ vercel.svg
│  │  └─ window.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ EN
│  │  │  │  ├─ contact
│  │  │  │  │  └─ page.jsx
│  │  │  │  ├─ featuredProjects
│  │  │  │  │  └─ FeaturedProjects.jsx
│  │  │  │  ├─ hobbies
│  │  │  │  │  └─ Hobbies.jsx
│  │  │  │  └─ skills
│  │  │  │     └─ Skills.jsx
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.js
│  │  │  ├─ layout.js
│  │  │  └─ page.jsx
│  │  ├─ App.js
│  │  ├─ components
│  │  │  ├─ ContactForm.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Form.jsx
│  │  │  ├─ MetaTags.jsx
│  │  │  ├─ Modal.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ ProjectCard.jsx
│  │  │  ├─ ReviewCarousel.jsx
│  │  │  └─ ThemeToggle.jsx
│  │  └─ hooks
│  │     ├─ NavbarHighlight.jsx
│  │     └─ useDownloadModal.jsx
│  └─ styles
│     ├─ main.scss
│     ├─ styling
│     │  ├─ _footer.scss
│     │  ├─ _grid.scss
│     │  ├─ _header.scss
│     │  ├─ _navbar.scss
│     │  ├─ _reset.scss
│     │  └─ _review_caroussel.scss
│     ├─ themes
│     │  ├─ _bright.scss
│     │  └─ _dark.scss
│     ├─ webpages
│     │  ├─ _contact.scss
│     │  ├─ _featured_projects.scss
│     │  ├─ _hobbies.scss
│     │  ├─ _soft_skills.scss
│     │  ├─ _tech_skills.scss
│     │  └─ _welcome.scss
│     ├─ _fonts.scss
│     ├─ _mixins.scss
│     └─ _variables.scss
├─ out
│  └─ production
│     └─ TARASSOVA_Anastassia_Portfolio_final_to_be_continued
│        ├─ constants
│        │  └─ CommonConstants.class
│        ├─ gui
│        │  ├─ LoginGUI$1.class
│        │  └─ LoginGUI.class
│        └─ LoginApp.class
├─ Portfolio with JS
│  ├─ .htaccess
│  ├─ .idea
│  │  ├─ ICA 3 portfolio.iml
│  │  ├─ misc.xml
│  │  └─ modules.xml
│  ├─ Brainstorming for Personal Portfolio.md
│  ├─ dist
│  │  └─ css
│  │     ├─ bootstrap-grid.css
│  │     ├─ bootstrap-grid.css.map
│  │     ├─ bootstrap-reboot.css
│  │     ├─ bootstrap-reboot.css.map
│  │     ├─ bootstrap.css
│  │     ├─ bootstrap.css.map
│  │     ├─ docs.css
│  │     ├─ docs.css.map
│  │     ├─ main.css
│  │     ├─ main.css.map
│  │     ├─ review_caroussel.css
│  │     └─ review_caroussel.css.map
│  ├─ English
│  │  ├─ .htaccess
│  │  ├─ EN_contact.html
│  │  ├─ EN_featured_projects.html
│  │  ├─ EN_hobbies.html
│  │  ├─ EN_portfolio_landing_page.html
│  │  └─ EN_skills.html
│  ├─ French
│  │  ├─ FR_assets
│  │  │  └─ 2024_Inf_Clin_CV_FR.pdf
│  │  ├─ FR_contact.html
│  │  ├─ FR_featured_projects.html
│  │  ├─ FR_hobbies.html
│  │  ├─ FR_Page_Principale.html
│  │  └─ FR_skills.html
│  ├─ index.html
│  ├─ Lighthouse_validation
│  │  ├─ using Lighthouse_1.png
│  │  ├─ using Lighthouse_2.png
│  │  ├─ using Lighthouse_3.png
│  │  ├─ using Lighthouse_4.png
│  │  └─ using_Lighthouse_0.png
│  ├─ php
│  │  └─ save.php
│  ├─ Planning Analysis Sheet.docx
│  ├─ Russian
│  │  ├─ RU_contact.html
│  │  ├─ RU_featured_projects.html
│  │  ├─ RU_hobbies.html
│  │  ├─ RU_portfolio_landing_page.html
│  │  └─ RU_skills.html
│  └─ shared_assets
│     ├─ 2024_Inf_Clin_CV_FR.pdf
│     ├─ 20250328124727_RemaxClone.pptx
│     ├─ css
│     │  ├─ style.css
│     │  └─ style.css.map
│     ├─ images
│     │  ├─ 1037--65505-800-u6q.jpg
│     │  ├─ 1725819461instagram-logo.png
│     │  ├─ 198747823f13e13270c6c8b87d0b1036a7631e78.jpeg
│     │  ├─ 20250111_095825.jpg
│     │  ├─ 20250111_095921.jpg
│     │  ├─ 20250111_100225.jpg
│     │  ├─ 20250111_100242.jpg
│     │  ├─ 2062376.png
│     │  ├─ 9781477319642.jpg
│     │  ├─ 9781844081813-uk.jpg
│     │  ├─ 9782894064993_large.webp
│     │  ├─ 98ae159aa1bb8b4243fbe1f9e27d1b9f.png
│     │  ├─ Ahabs-Wife.jpg
│     │  ├─ auctions.png
│     │  ├─ aws-academy-graduate-aws-academy-cloud-security-foundations.png
│     │  ├─ BonjourSante.png
│     │  ├─ bootstrap-logo-png-bootstrap-logo-390.png
│     │  ├─ chateaux-de-la-colere-folio-livre-occasion-29825_1.jpg
│     │  ├─ css3-logo-png-transparent.png
│     │  ├─ DeansList.png
│     │  ├─ Enchantress_of_florence.jpg
│     │  ├─ f7ad9720-7002-4c57-8d44-0405b7e00ee2.jpg
│     │  ├─ FCC.jpg
│     │  ├─ figma.png
│     │  ├─ github-mark.png
│     │  ├─ goodnight-punpun-vol-1-9781421586205_hr.jpg
│     │  ├─ html-logo.png
│     │  ├─ icons8-home-64.png
│     │  ├─ IMG_20210131_221746_948.jpg
│     │  ├─ IMG_20210208_090255_351.jpg
│     │  ├─ IMG_20210217_090313_884.jpg
│     │  ├─ java.png
│     │  ├─ javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png
│     │  ├─ jpeg.webp
│     │  ├─ laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png
│     │  ├─ LaravelPortfolio.png
│     │  ├─ linkedin-logo-linkedin-icon-transparent-free-png.webp
│     │  ├─ Meta-Logo.png
│     │  ├─ php-logo-bigger.png
│     │  ├─ RemaxClone.png
│     │  ├─ sql-database-icon-png-17.png
│     │  ├─ thumbnail_20240601_143811.jpg
│     │  ├─ vector1.jpg
│     │  ├─ w3schools-1536.png
│     │  ├─ walrus_favicon_io
│     │  │  ├─ android-chrome-192x192.png
│     │  │  ├─ android-chrome-512x512.png
│     │  │  ├─ apple-touch-icon.png
│     │  │  ├─ favicon-16x16.png
│     │  │  ├─ favicon-32x32.png
│     │  │  ├─ favicon.ico
│     │  │  └─ site.webmanifest
│     │  ├─ walrus_favicon_io.zip
│     │  └─ walrus_progress
│     │     ├─ 20250102_173417.jpg
│     │     ├─ 20250102_182141.jpg
│     │     ├─ 20250102_193255.jpg
│     │     ├─ 20250102_194414.jpg
│     │     ├─ 20250102_200253.jpg
│     │     ├─ 20250102_201236.jpg
│     │     └─ 20250108_221350.jpg
│     ├─ JS
│     │  ├─ 0_navbar_active_highlight.js
│     │  ├─ 10_current_year.js
│     │  ├─ 11_dark_light_theme_toggle.js
│     │  ├─ 1_fluid_transitions.js
│     │  ├─ 2_modal.js
│     │  ├─ 3_review_carousel.js
│     │  ├─ 4_walruses.js
│     │  ├─ 5_featured_projects_effects.js
│     │  ├─ 6_form_validation.js
│     │  ├─ 7_table.js
│     │  ├─ 8_google_api.js
│     │  └─ 9_books_read.js
│     ├─ Login GUI
│     │  ├─ .idea
│     │  │  ├─ misc.xml
│     │  │  └─ modules.xml
│     │  ├─ Login GUI.iml
│     │  └─ src
│     │     ├─ constants
│     │     │  └─ CommonConstants.java
│     │     ├─ gui
│     │     │  └─ LoginGUI.java
│     │     └─ LoginApp.java
│     ├─ scss
│     │  ├─ main.scss
│     │  ├─ styling
│     │  │  ├─ _footer.scss
│     │  │  ├─ _grid.scss
│     │  │  ├─ _header.scss
│     │  │  ├─ _navbar.scss
│     │  │  ├─ _reset.scss
│     │  │  └─ _review_caroussel.scss
│     │  ├─ themes
│     │  │  ├─ _bright.scss
│     │  │  └─ _dark.scss
│     │  ├─ webpages
│     │  │  ├─ _contact.scss
│     │  │  ├─ _featured_projects.scss
│     │  │  ├─ _hobbies.scss
│     │  │  ├─ _soft_skills.scss
│     │  │  ├─ _tech_skills.scss
│     │  │  └─ _welcome.scss
│     │  ├─ _fonts.scss
│     │  ├─ _mixins.scss
│     │  └─ _variables.scss
│     └─ WebServicesPwP2 1.pptx
├─ README.md
└─ TARASSOVA_Anastassia_Portfolio_final_to_be_continued.iml

```