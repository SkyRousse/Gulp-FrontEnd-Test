#Before you start, here's what you need to know how to use:

- Node.js / npm [ https://www.npmjs.com/get-npm ]
- gulp
- sass
- jQuery
- html/html5


TASKS

Estimated time to complete:  90 minutes

#Step 1 - Setup local environment to leverage gulp to process sass files

You will be tasked to style a one page layout with navigation, hero, content, products and footer.  Before you design, you’ll need to setup gulp to run locally on your machine.

#Step 2 - Work Requested - Style Content Block

Desktop (769px and over) should have a left/right horizontal layout to match comps in COMPS folder.
Mobile (768px and under) should have a vertical layout where the left hand column on desktop is the LAST column on mobile layouts with a border to separate the two blocks of content.

*Match the screenshots as closely as possible*
*Do NOT use:  “float” or “tables” for any part of this assignment.  Hint: “flex”*

#Step 3 - Work Requested - Style Product Tiles

Desktop (769px and over) - should have product blocks that are 4 per row (see comps in COMPS folder).  
Tablet (768px and under) - should have product blocks there are 3 per row (see comps in COMPS folder).  
Phone (414px and under) - should have product blocks there are 2 per row (see comps in COMPS folder).
On each row, make sure that the edges of the product tiles are flush/even with the left and right container borders.

*Match the screenshots as closely as possible*
*Do NOT use:  “float” or “tables” for any part of this assignment.  Hint: “flex”*

#Step 4 - Work Requested - Convert Product Images to Use <picture> HTML5 Specifications

Update product image instances in the #products block with <picture> tags that adheres to the following specs.

- At 876px and above viewport widths - image size should be 300x300.
- At 875px and below viewport widths - image size should be 200x200.
- Default image size is 300x300 for browsers that don’t recognize the <picture> tag
- Include/reference to both regular AND retina images ("2x") where allowed.

*Note: use the placeholder image examples [ http://via.placeholder.com/300x300 ]. You set the dimensions after the last '/'.*

#Step 5 - Work Requested - Add scripts to enable a mobile menu.

Using jQuery and editing the app.js file in the assets folder, (1) add script(s) to enable a mobile navigation that slides down when clicking on the hamburger/mobile menu button (only visible at viewport sizes at and below 768px) and (2) closes when clicking on the "X" when the mobile menu is open.

The mobile menu can be located on the index.htm file by searching for a div with the id of "mobile-nav".

See comps in COMPS folder for examples.
