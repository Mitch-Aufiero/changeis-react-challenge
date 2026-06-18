# Simple React Coding Challenge for Changeis

This application is built with React and TypeScript. It pulls company info from an external [API](https://fakerapi.it/) and displays them in a grid. 

## Table of Contents
 * [Technologies Used](#technologies-used)
 * [Installation](#installation)
 * [Folder Structure](#folder-structure)
 * [API Details](#api-details)
----------------------------------

## Technologies Used
- React (with TypeScript)
- styled-components (for styles)

## Installation
Clone the repository:

```bash
git clone https://github.com/Mitch-Aufiero/changeis-react-challenge.git
cd changeis-react-challenge/react-ts
```


Install dependencies:

Ensure you have [Node.js](https://nodejs.org/en/download/prebuilt-installer) installed, then run in the project directory:

```bash
npm install
```
Run the application:

Start the development server:

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.


Build the application (optional):

If you want to create a production build:

```bash
    npm run build
```







## Folder Structure
```bash
react-ts/src/
│
├── services/             
│   └── companyService.tsx    # Handles api fetching for company info
│
│
├── components/               # Reusable component
│   └── CompanyCard.tsx       # Displays an individual companies information in a styled card
│
├── pages/
│   └── CompaniesPage.tsx     # Company page with grid display of companies
│
├── types/                    # TypeScript interfaces
│   CompanyInterfaces.ts      # Types for company data
│
├── App.tsx                   # Main app component
├── index.tsx                 # Entry point for React app
├── App.css                   # Global styling
```

## API Details

### Endpoint
* **URL**: `https://fakerapi.it/api/v2/companies`
* **METHOD**: `GET`
* **RETURNS**: An array of companies.

### API Service (`companyService.tsx`)
The `src\services\companyService.tsx` file handles the loigc for fetching companies from the faker API.
