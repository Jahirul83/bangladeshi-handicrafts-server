# Bangladeshi Handicrafts Backend

## Overview

This repository contains the backend code for the "Bangladeshi Handicrafts" website. The backend is responsible for handling data management, user authentication, and interactions with the MongoDB database.
### Installation

 **Clone the repository**:
   ```bash
   git clone <repository>
   cd <repository>
   ```

For running the project locally.
Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install .
```bash
npm install
```
or
```bash
yarn install
```
And Then

```bash
npm run dev
```
or
```bash
yarn dev
```
---
.env
```bash
DB_USER=bdHandicraftsUser
DB_PASS=4nXe8b9HzceHvUZm
```

## Features

- User authentication with email/password, Google Sign-in, and GitHub Sign-in.
- API endpoints for managing businesses and products.
- CRUD operations for business profiles and product details.
- Environment variable management for sensitive information.

## Technology Stack

- **Backend Framework:** Node.js with Express or NestJs
- **Database:** MongoDB
- **Authentication:** Passport.js or another suitable library for handling Google and GitHub authentication.
- **Environment Variables:** Managed via a `.env` file

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB
