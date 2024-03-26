# Portfolio

This will be a work-in-progress project that I work on as time allows. I really want my portfolio to be more vibrant than the one I currently have, and I've learned alot about creating websites since my first pass at a portfolio, so I want to show what I've learned!

I've decided to use React, mostly just for practice and because it literally just makes more sense to me. I like the way React is structured in your directory during development, and the component-based nature of it feels easier to swallow as a project gets bigger and bigger. 
One of the main things I want to accomplish with this new portfolio is an expandable projects section. I basically want to be able to put on display every project I publish so I don't have to pick and choose which 3 projects I include. 
Also, my first portfolio is pretty dark, I want this one to be brighter and more dynamic. So that's what I'm going for.

### 11/6/23:

---

Init commit.

Also added some basic file structure and some styling to the header. I've found that I really like nesting my components into the sections where they go. It helps to keep the Components folder looking clean and I think is much more descriptive as to what's happening in each component.

### 11/7/23

--- 

I've decided I want to use client-side routing, so I'm using react-router-dom to handle the routing to about, projects, and home pages. I've hit a bit of a snag with dynamically mapping through the json file I've building my project display from. I'm trying to record a path to an image file in that json file that corresponds to a specific project. And I want the projectDisplay.jsx file to render the image of a project on the card as it maps through the file and creates each project card. So once I finish my stuff for today, I'll revisit. If not today, then I'll revisit tomorrow. 

Ended up making a quick fix by manually creating project cards for now. Still an improvement on my old portfolio but not everything I was shooting for.

### 12/24/23 

---

I had an interview and a GameJam, so this project fell a bit to the wayside. But I'm back to adding updates to this! I changed some of the about me and drew a little pixel avatar to greet visitors to the portfolio! I just started a full-stack certification, so I'm hoping to glean the skills I need to better implement some of my original ideas to this sometime in the future. As for immediate next steps, I'm wanting to get the necessary media queries to make the navbar, background, and main content properly responsive for the edge cases. Most resolutions work great, but there are a few edge cases, mainly phone resolutions, that break the UI. So that's my next step in the project, at which point, I think I'll be happy enough with it to deploy!

### 1/13/24

---

I went ahead and finished up some styling and added a project that I've been working on. I decided now's as good a time as any, so the site is live! I'll be adding mobile support in the coming week and adding projects as I complete them.

### 1/29/24

---

I went back and forth on whether or not I should have blender projects on my portfolio, ultimately I decided I could put them there. I'm not really looking for 3D modeling jobs or art-forward roles professionally, but I enjoy doing it so I don't think it's a detriment. I've had an issue with my buttons on mobile taking on that hyperlink blue color, but should be fixed now.

### 2/22/24

---

I've been hard at work at an application for finding local concerts, and I just updated the ol portfolio to have a little teaser screenshot of what I'm working on. 

### 3/25/24

---

I added some updated styling (after getting some recommendations) and I think it looks loads better now. I also added something that I had always envisioned, but just now made it happen: a carousel view for projects!

On mobile, the projects page now scrolls horizontally. ~~ cool ~~ 

My next to-dos are to migrate the height calcs for all the pages to svh when on mobile so you don't have that tiny bit of overflow at the bottom of the screen. I'll need to do some research on what is truly the best option for this though, cause I want to make sure i implement the right option first so I don't have to keep returning to it (I'll have to return to it).
