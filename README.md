<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.nuscomputing.com">
    <img alt="Gatsby" src="src\images\compclublogosmall.png" width="60" />
  </a>
</p>

# NUS Computing Club

This site was built with Gatsby, which is a React based framework. You may find the instructions below in order to start a local server, and start developing.

## Setting up the environment

1. **Clone the repository from github**

    Use Git to clone this repository to a local git repository.

    ```shell
    # clone this repo using git
    git clone https://github.com/NUSComputingDev/beta-nuscomputing.git
    ```

2. **Installing Gatsby**

    Installing the required dependencies to run the developmental server

    ```shell
    npm install gatsby-cli
    ```

3. **Start the local server**

    Use this to run the local server

    ```shell
    #navigate to the directory where you cloned the repository and start the development server
    cd ../beta-nuscompting
    gatsby develop
    ```

    If you face an error when running ``gatsby develop``, try ``npm install`` to install the required npm packages for the server.

4. **View the Server**
    Your site is now running at `http://localhost:8000`!

***

## Adding or modifying content

1. **Pages**
    Pages can be found under ``../src/pages`` and the individual page .js files can be found in there.

    The component ``<BaseContainer>`` consists of the header, and footer of the original site. You should call ``<BaseContainer>`` in all pages if you want to include the original site header and footer. Else, you can create a new component for a different header or footer.

2. **Components**
  New components can be created to suit the needs of the page you are trying to create. Currently, there are components already created, which you may reuse.
  They are as follows:
    - ``base-container.js`` contains the entire header and footer for the site.
    - ``blue-logo.js`` contains the computing club logo.
    - ``footer.js`` contains the footer of the site.
    - ``outlined-card.js`` contains styling for the card in recruitment the recruitment page. This is used in ``recruitment-details.js``.
    - ``recruitment-details.js`` is used in the recruitment page for all the individual cells.
    - ``seo.js`` contains metadata of the site.
    - ``sign-up-button.js`` contains the link of the recruitment button.
    - ``small-logo.js`` contains the small Computing Club Logo.
    - ``top-bar.js`` is the actual header of the site used.
    - ``white-logo.js`` is the white Computing Club Logo.

## Deploying

   To deploy the site to GitHub, run the following command

   ```shell
   npm run deploy
   ```
