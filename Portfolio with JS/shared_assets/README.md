Author: Tarassova Anastassia
Date: 2024-01-18
Version 3.0 --> adding JS

Purpose: Junior developper portfolio for potential workplaces.
User: HR, other students, etc.

ICA3Portfolio/ 
│
├── .idea/                          # IDE configurations for IntelliJ IDEA
│
├── .vscode/                        # IDE configurations for Visual Studio Code
│
├── dist/                           # Compiled files
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── docs.css
│   ├── docs.css.map
│   ├── map.css
│   └── main.css.map
│
├── English/                        # English version of the portfolio pages
│   ├── EN_contact.html
│   ├── EN_featured_projects.html
│   ├── EN_hobbies.html
│   ├── EN_portfolio_landing_page.html
│   └── EN_skills.html
│
├── French/                         # French version of the portfolio pages
│   ├── FR_assets/                  # French assets
│   └── 2024_Inf_Clin_CV_FR.pdf     # French CV
│   ├── FR_contact.html
│   ├── FR_featured_projects.html
│   ├── FR_hobbies.html
│   ├── FR_portfolio_landing_page.html
│   └── FR_skills.html
│
├── Russian/                        # Russian version of the portfolio pages
│   ├── RU_assets/                  # Russian assets
│   ├── about.html
│   ├── contact.html
│   ├── index.html
│   └── projects.html
│
├── shared_assets/                  # Shared assets (CSS, images, JS, SCSS files)
│   ├── css/
│   │   ├── style.css
│   │   └── style.css.map
│   └── js/                          
│       └── ---js.script            ==TO SPLIT INTO INDIVIDUAL CASES==
│
├── images/                         
│   ├── walrus_favicon_io/ 
│   ├── walrus_progress/            ==TO IMPLEMENT==
│
├── scss/                           
│   ├── styling/                    
│   │   ├── _footer.scss
│   │   ├── _grid.scss
│   │   ├── _header.scss
│   │   ├── _navbar.scss
│   │   ├── _reset.scss
│   │   ├── _review_carrousel.scss
│   ├── themes/ 
│   │   ├── _bright.scss            
│   │   ├── _dark.scss            
│   ├── webpages/ 
│   │   ├── _contacts.scss        
│   │   ├── _featured_projects.scss
│   │   ├── _hobbies.scss
│   │   ├── _soft_skills.scss
│   │   ├── _tech_skills.scss
│   │   ├── _welcome.scss
│   │   ├── _fonts.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   └── main.scss
│
├── README.md                       # Project overview and documentation
│
├── Brainstorming for Personal Portfolio.md  # Project brainstorming document
│
└── Planning Analysis Sheet.docx     # Planning and analysis document



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

