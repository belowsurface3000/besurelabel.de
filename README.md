# Be Sure music label website | rebuilt with Next.js
Be Sure is a cutting-edge techno and ambient music label that has been making waves in the electronic music industry for several years. With an impressive catalog of 25 releases to date, Be Sure has received widespread acclaim and support from international DJs and music enthusiasts alike. The label's innovative and distinctive sound has attracted the attention of renowned artists such as Dax J, Richie Hawtin, SNTS, and many others, making it a prominent force in the underground music scene. Each Be Sure release showcases the label's commitment to pushing the boundaries of electronic music and delivering an unforgettable listening experience.
Live version: https://besurelabel.de
# Used languages
- Next.js 13
- SCSS
## Note
The Impressum and Datenschutz pages are not uploaded to Github, but available on the live page.

## How to develop
- clone the repo
- create a .env.local file in the project's root
- add these variables and connect to your Emailjs account to send emails via the contact form
```
EMAIL_SERVICE=
EMAIL_TEMPLATE=
EMAIL_USER=
```
- $ npm i
- $ npm run dev

## How to public (static export)
- $ npm run export
- the exported files will be located in the /out directory.