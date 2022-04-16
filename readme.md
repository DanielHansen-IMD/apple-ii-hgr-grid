# Apple II HGR2 Grid
I wanted to recreate the Ladd Company logo on my Apple II in HGR2 mode in Applesoft BASIC. I got tired of trying to figure out what co-ordingates I needed when using HPLOT, so I made a little web tool to help visualize the co-ordinates. 

This is a simple little page that constructs a 280x192 grid (the Apple II's HGR2 pixel dimensions), and a tooltip in each grid area that provides its X,Y co-ordinates on hover. There's a little toggle to show or hide the grid.  

At the moment, I have the Ladd Company logo as a background image on the '.grid-box' element allow me to approximate the co-ordinates I need to use as my DATA points. This currently requires the image used have exactly the aspect-ratio of the HGR2 mode, approx 16:11.

A future possibility to 'app-ify' this is to allow the placement of a background via a form, in a framework. 

So, TODO: 
- svelte
- file upload to place image