<p align="center"><img src="./code/public/app/src/assets/favicon.png" alt="icon" width="90"/></p>
<h1 align="center">OX2 Biodiversity</h1>
<p align="center"><img src="https://img.shields.io/github/v/tag/cide0/school-project?label=latest%20version&style=flat-square"/></p>

This is a school project I worked on with a team of 3 other students as a part of my apprenticeship to become a web developer.

The goal of our group was to create a web application that allows users to explore and learn about the biodiversity in a planned solar panel project near Mariehamn for the company [OX2](https://www.ox2.com/).

There was also another main group of students that worked on a core API to provide all the other project teams with the required data.

Sadly however, the core API was never finished, and therefore we had to create our own placeholder data for the frontend to work with.

## Current Features:
- **Dashboard page:** Welcomes the user and provides a short introduction to the recently found animal species in the project area. Also includes a link to the voting page for new sheep names. More about that later.
- **Navbar:** Provides links to the dashboard, live cams page, animal pages and includes a counter of the total number of species found in the project area.
- **Live cams page:** Links to live streams of the sheep and bird cams in the project area.
- **Animal pages:** Each animal species has its own page with a short description, some basic information about the animal, a picture and a link to the Wikipedia page of that species.
- **Sheep page:** On this page, users can find pictures and short descriptions for every sheep in the project area. These were planned by OX2 to live in the solar park.
- **Voting page:** Allows users to vote for a new sheep's name. Our idea was that whenever a new sheep is added to the park, the owner can provide a pre-selected choice of names and every user can vote for their favourite. 
  After a set period of time the vote is closed and the name with the most votes is chosen for the new sheep.

We also planned to add a login feature and a backend database so that users can only vote once, but sadly we didn't have enough time to implement it.

## Setup

1. Simply run `make install`.

2. Open your browser and go to:
   - [Localhost on port 4200](http://localhost:4200/) for the frontend.
   - [Localhost on port 80](http://localhost:80/) for the backend.

## Make Targets

There are different make targets available to install and run this project:
- `make list` - List all available make targets.
- `make build-dev` - Build the backend Docker images.
- `make up` - Start the containers.
- `make down` - Stop the containers.
- `make install` - Run `make build-dev`, `make up`, `make npm-install` and install composer dependencies.
- `make update` - Update composer dependencies.
- `make cleanup` - Cleanup all containers, images and volumes.
- `make npm-install` - Install npm dependencies for Angular.
- `make component COMP={new_component_name}` - Add a new Angular component and create the relevant files with the given name.