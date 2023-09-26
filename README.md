# The cIDA official website


# Introduction

This guide provides you with all the information needed to update and maintain content for the [c4dm website](https://c4dmwebsitemain.gatsbyjs.io/). Most of the tasks can be directly performed directly within the [c4dm Github repository](https://github.com/SFRL/c4dm-website). The only folder that you have to focus on is [src/content](./src/content). In this guide we explain how to update the following content from the website:

- [Adding new patents](#updating-patents)
- [Adding or editing c4dm members](#updating-people)



## Updating Patents
For adding a new patent or editing existing ones, go to [/src/content/research/patents/projects](./src/content/research/patents/projects) in the Github repository. 
You will find a list of .md (markdown) files. You will see that each of the files has a structure similar to the following example:

```
---
title: "Music Collection Navigation"
begin: "22 August 2008 "
grant: "0815362.9 (UK), 09784979.8 (Europe), 13/060090 (USA)"
---
```

## Markdown 
For this website, you will write all of your content in markdown. [Markdown](https://en.wikipedia.org/wiki/Markdown) is a simple language for creating formatted text. Markdown files usually end with a `.md` extension. The most important things to remember about markdown syntax are: 

- *italic text* is achieved by placing an asterisk before and after the text you want to be italicised, e.g. `*italicised text*`
- **bold text** is achieved by pacing two asterisks before and after the text you want to be bold, e.g. `**bold text**`
- ***italic and bold text*** is achieved by placing three asterisks before and after the text that you want to be bold and italicised, e.g. `***bold and italicised text***`
- links are written in the form `[name of the link](URL that you want to link to)` for example `[Link to Google](https://www.google.co.uk/)` will result in [Link to Google](https://www.google.co.uk/)
- images are included in the form `![Alt text](path to image "title")` for example `![A photograph of a cute, ginger cat looking towards the camera](readme_pics/cat.jpeg "Cute kitty")` will result in <br>![An image of a cute cat](readme_pics/cat.jpeg "Cute kitty")<br>Cute Kitty<br>You should always include a short description of the image in alt text to make your website accessible for users who have a visual impairment. 

You can read more about basic Markdown syntax [here](https://www.markdownguide.org/basic-syntax/).

For this website, you can also embed youtube or vimeo videos in your content so visitors can watch the videos directly on the cIDA website. To embed a video follow these examples

`` `youtube: https://www.youtube.com/watch?v=NDWKTcvEOJM` ``<br>
for youtube you can just copy the URL of a video. If the URL contains the word *watch* you should have the right one.

`` `vimeo: 745375986?h=be905817e4` ``<br>
for vimeo you will have to include only the video id. You can find the id, by clicking on *share* on a vimeo video and choose the *embed* option. This will give you the html code you could use to embed the video. For example above it looks like this: 
```
<iframe title="vimeo-player" src="https://player.vimeo.com/video/745375986?h=be905817e4" width="640" height="360" frameborder="0" allowfullscreen></iframe>
```

The id is found in the `src` tag after `https://player.vimeo.com/video/`

## Markdown frontmatter
When looking at any markdown files in this project you will notice that they will start with something like this: 

```
---
title: "International Conference in Ideology and Discourse Analysis 2019"
date: "2019-05-31"
endDate: "2019-06-01"
place: "University of Essex"
image: "./logics.png"
category: ["conference","event"]
time: ""
highlight: false
---
```

### Updating Projects

Everything between the `---` is called frontmatter. Frontmatter contains metadata for the content that you are creating, e.g. the title of an event and the date when it took place. This will make more sense when we talk about creating content for the individual sections. Frontmatter should be placed at the top of your markdown file. The main body of text should be added below the frontmatter.

**Note** it is important to strictly follow the format that is explained below for each tag in the frontmatter like the use of quotation marks `""`, brackets `[]` etc..

## Using images correctly
**Make sure that images are saved in the jpeg or png format**. Logos, especially round ones like the cIDA logo should be used in png format with transparent background. 

Make sure to choose an appropriate resolution for your image. If the resolution is too small, images will look low quality. If it is too high, the website will take a longer time too load. Here are some guidelines for images in different contexts:

- **event and member images** the sections What's On, Archive and Members are all organised with cards that include an image. This image will also appear when clicking on these cards. The image is automatically cut to square form. If you want to make sure that it is not cut in an awkward way, please provide an image that is already (roughly) in square form. **The resolution of these images should be around 600x600 pixels. **
- **images in main body of text** you can also include images in the main body of your markdown files. There a are no hard restrictions for the aspect ratio or resolution, but **try to not exceed 1000 pixels for the width or height** of the images.
- **hero image** this is large image that is shown on the landing page. This image should have an **aspect ratio of around 3/2 with a resolution around 1800x1200 pixels.** 



## Uploading and creating files on GitHub
You can add content to any section by clicking `Add file` in the top left corner.

![Screenshot for add file on GitHub](readme_pics/add_file_large.png "Add files large")

After clicking on `Add file` you can choose between `Create new file` and `Upload files`. 

![Screenshot of add file suboptions on GitHub](readme_pics/add_file_small.png "Add files focused")

If you want to add new written content (e.g. about an event), you can create a new markdown file. Give your file a unique name and don't forget the `.md` extension. You can now add the content (keep the markdown syntax in mind).

![Screenshot of creating a markdownfile on GitHub](readme_pics/create_md_file.png "Create md file")

To publish your content to the website, you will have to commit your changes. *Commit* is the term used in GitHub, you can think about it as *save&publish*. Every time you commit changes, you should provide a short description of what you have done. This can be something simple like *Created entry for event XYZ*

![Screenshot of commiting changes on GitHub](readme_pics/commit_md_file.png "Commit md file")

You can also upload files from your personal device. For example, you might want to add images or a pdf to a text that you have written about an event. Again you will have to commit your changes.

**You should upload images before you include them in your markdown.**

![Screenshot of uploading files to GitHub](readme_pics/upload_content.png "Upload file")

When opening a file on GitHub you will also have the option to delete or edit the file.

![Screenshot of editing files to GitHub](readme_pics/edit_button.png "Edit file")

![Screenshot of deleting files to GitHub](readme_pics/delete_file.png "Delete file")


## General advice 

Don't worry about making a mistake when adding new content. You cannot break the website. The worst thing that can happen if you accidentally enter information incorrectly is that the website does not update. If you realise that the website did not update after a few minutes, double-check that you did not make any mistakes in the frontmatter or elsewhere in the markdown files. If you are not sure if you have done everything correctly, you can always have a look at the markdown files of other projects, members, publications etc. and compare it to yours.

# How content works for individual sections 

This section explains how to add and edit content for different sections. I propose the following workflow for adding new content: 

- First upload to GitHub any material (images or a pdf) that you want to include in your markdown to the correct subfolder (e.g. to [src/content/members](src/content/members/) if you want to add a new member).
- Create a new markdown file in the same subfolder on GitHub and copy the frontmatter templates for the relevant section as explained below. 
- Add metadata to frontmatter and **delete all frontmatter tags that are not used.**
- Add the main body of content (text, images, embedded videos) to the markdown file below the frontmatter.




## Projects 

In the [projects subfolder](src/content/projects/) you will find a variety of content that will be shown in *What's On* and *Archive*. This could be events, blog posts, paper series etc.. Content will automatically move to the archive, if it is no longer current, more on this below. There are quite a few tags in the markdown frontmatter. A frontmatter template with all possible tags looks like this:

```
---
title: ""
date: ""
endDate: ""
expireDate: ""
place: ""
time: ""
category: [""]
highlight: false
image: ""
pdf: ""
---
```

Let's break down these tags:

- **title:** the title of the content e.g. `title: "Ideological Fantasy at work"`. You should always include this tag.
- **date:** the date of this piece of content. This could be the date for an event or the date on which you publish a blog post. The data is written in the format "yyyy-mm-dd" e.g. `date: "2019-05-31"`. You should always include this tag. **If the specified date is in the future the content will be shown in What's On, otherwise it will be shown in the Archive!**
- **endDate:** if an event like a conference extends over multiple days you can specify the end date here. **Delete this tag if you don't need it.**
- **expireDate:** if you write something like a blog entry, you might choose the date of publishing for your date tag. If you don't want your post to be moved to Archive immediately, you can specify an expiration date for your blog entry at which your blog entry should be moved to the Archive. **Delete this tag if you don't need it.** 
- **place:** the location of an event, e.g. `place: "University of Essex"`. **Delete this tag if you don't need it.**
- **category:** the category of your content e.g. event or working paper series. Categories have to written within the [], multiple categories should be separated by a comma e.g. `category: ["conference","event"]`. Please specify at least one category and try to use categories that are already in use to describe your content. **Categories should be written with lower case letters only.**
- **time:** The time at which an event takes place. This should be written in military time e.g. `time: "16.30 - 18.00"` **Delete this tag if you don't need it.**
- **highlight:** indicates whether content should be highlighted at the top of the What's On page. If content should be highlighted, write `true` else write `false`.
- **image:** this is the image shown on the cards in What's On and Archive and also on the individual content pages. After uploading an image, enter the image name including extensions (e.g. `.jpg`,`.jpeg` or `.png`) preceded by `./`. The tag for a png image with the name *test* would look like this `image: "./test.png"`. Ideally, you should always include an image to make the website more vibrant. If you don't include the image tag, [this default image](static/defaultevent.png) will be shown.
- **pdf:** sometimes you might want to include a pdf document in your content, for example when create a post about the working paper series. You can upload a pdf and include it in the pdf tag the same way as an image. The tag for a pdf with the name *test* would look like this `pdf: "./test.pdf"`. **Delete this tag if you don't need it.**

**DON'T SET endDate OR expireDate TO THE SAME VALUE AS date IT WILL PREVENT THE PAGE FROM FUNCTIONING CORRECTLY. IF ALL OF THESE DATES ARE THE SAME, DELETE endDate AND expireDATE AND ONLY KEEP date!** 



## Members

In the [members subfolder](src/content/members/) you can add new members to the cIDA website. The frontmatter template with all possible tags looks like this:

```
name: ""
role: ""
intro: ""
image: ""
twitter: ""
website: ""
```

Let's break down these tags:

- **name:** name of the member (first name + last name) e.g. `name: "Jane Doe"`. You should always include this tag.
- **role:** the role of that member, this could be anything really, but the most common roles would be *Academic Staff* and *PhD Student*, e.g. `role: "PhD Student"`. You should always include this tag.
- **intro:** a short introduction of the member that is shown on the card on the members page. This should not be longer than one sentence, briefly outlying research interests etc., e.g. `intro: "My research interest are postructuralist discourse theory, Lacanian psychoanalysis and protests."`. A short introduction will be helpful for a website visitor to get a on overview of the research that is conducted at cIDA.  
- **image:** a picture of the member. After uploading an image, enter the image name including extensions (e.g. `.jpg`,`.jpeg` or `.png`) preceded by `./`. The tag for a png image with the name *janedoe* would look like this `image: "./janedoe.png"`. Ideally, you should always include an image to make the website more vibrant. If you don't include the image tag, [this default image](static/defaultprofile.png) will be shown.
- **twitter:** a link to the member's twitter account. Please add the Twitter handle (starting with an @) rather than an URL e.g. `twitter: "@cIDA_essex`. **Delete this tag if you don't need it.**
- **website:** a link to the member's personal website e.g. `website: "https://sebastianlobbers.com/"` **Delete this tag if you don't need it.**

**Note** if you want to include more links to websites or other social media, you can also add links to the main body of text in your markdown.


## Publications 
In the [publications subfolder](src/content/publications/) you will find a number of markdown files with the name reflecting a year (e.g. `2020.md`). Each file contains a list of cIDA publications from that year. The frontmatter template looks really simple:
```
---
year: 
---
```
- **year:** the year of the publications as a number (without "") e.g. `year: 2021`. You need to include this tag.

The list of publications goes into the main body of the markdown file in the form:
```
- Authors, (year), Title (including link to paper if available), Name of publication medium (journal, conference etc.)
- more publications
- ...
- ... 
```

For the year 2021 the list looks like this
```
---
year: 2021
---
- Glynos, J., Howarth, D., Flitcroft, R., Love, C., Roussos, K. and Vazquez, J., (2021). [Logics, discourse theory and methods: Advances, challenges and ways forward.](http://repository.essex.ac.uk/29346/) Journal of Language and Politics. 20 (1), 62-78.
- Glynos, J. (2021) [Critical Fantasy Studies](http://repository.essex.ac.uk/29347/), Journal of Language and Politics 20(1) 95-111.
- Bloom, P. and Śliwa, M., (2021). [Hacking work: Critically examining the implications of the new discourse and practices of hacking for work intensification and organisational control.](http://repository.essex.ac.uk/30035/) Human Relations, 001872672199676-001872672199676
```

Note that each new publications starts with `-`. If you want to add a publication for a year that already exits, you just have to edit the relevant markdown file. If nothing exists for this year, you will have to create a new markdown file.


## About 
In the [about subfolder](src/content/about/) you will find one markdown file called `content.md`. You will only have to edit this file to make changes to the about content; no need to create new markdown files in this case. The frontmatter looks like this:

```
---
title: About 
image: "../logos/cida_red_logo.png"
centre_logos:
- logo: "./desire-horizontal.png"
  logo_alt: "Desire logo"
  link: "https://www.researchcenterdesire.eu/" 
---
```

- **title** is self-explanatory, it's unlikely that you will want to change this. 
- **image** is the logo that is shown next to the about text. If you want to change it to a different logo, you will have to upload another logo to the logos folder and change `cida_red_logo.png` to the name of the new logo.
- **centre_logos** describes the logos and links to associated centres. If you want to add more, you will first have to upload a new logo to the about folder. Then add a `-` under the previous entry in markdown and add the tags: *logo*,*logo_alt*,*link*. So a new entry could look something like this:
  ```
  centre_logos:
  - logo: "./desire-horizontal.png"
  logo_alt: "Desire logo"
  link: "https://www.researchcenterdesire.eu/" 
  - logo: "./new_logo.png"
  logo_alt: "Alt text for new logo"
  link: "https://www.url_to_associated_centre.com/" 
  ```

## Hero 
In the [hero subfolder](src/content/hero/) you will find one markdown file called `content.md`. You will only have to edit this file to make changes to the hero; no need to create new markdown files in this case. The markdown looks like this: 

```
---
title: Centre for Ideology and Discourse Analysis
image: "./background.jpg"
---

Welcome to the Centre for Ideology and Discourse Analysis
```

- **title:** is self-explanatory, it's unlikely that you will want to change this.
- **image:** the background image that spreads over the whole screen on the landing page and is partially seen in the header on all pages of the cIDA website. If you want to upload a new image, make sure that it is high resolution (about 1800x1200 pixels).
- in the main body after the frontmatter you can specify the welcome text that visitors will see on the landing page.   



# Technical Setup

A quick technical perspective one how the website was created and how it is hosted.

The website was created with the [Gatsby](https://www.gatsbyjs.com/) framework. Gatsby is a react-based static site generator. It further uses the CSS framework [Bulma](https://bulma.io/) for styling.

The source code is hosted here on GitHub, but the website is built and hosted on [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/). Every time, changes are committed to GitHub a rebuilt is triggered on Gatsby Cloud. A GitHub [workflow](.github/workflows/update_log.yml) is defined to run this [python script](log/update_log.py) once a day at 21:12 UTC. The script updates this [log file](log/log.txt) and then commits the changes which triggers a rebuilt on Gatsby Cloud. This ensures that the website pulls the latest tweets from the cIDA Twitter for the News section in What's On and that items are moved from What's On to Archive the day they expire.
