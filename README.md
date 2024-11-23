# Car Store Management API

A comprehensive Express application built with TypeScript to manage a Car Store, using MongoDB with Mongoose for data operations and schema validation.

---

## Features
- **CRUD Operations** for managing Cars and Orders.
- **Schema Validation** with Mongoose for data integrity.
- **Inventory Management** integrated with order processing.
- **Revenue Calculation** using MongoDB aggregation pipelines.

---

## Technologies Used
- **Node.js** with **Express.js**
- **TypeScript**
- **MongoDB** with **Mongoose**
- **RESTful API Design**

# PH Assignment-02

This is a TypeScript-based Node.js project that implements car and order services using a modular architecture.

## Project Structure

```plaintext
PH Assignment-02/
├── dist/                       # Compiled output
├── node_modules/               # Project dependencies
├── src/                        # Main source code
│   ├── app/                    # Application modules
│   │   ├── modules/            # Feature-specific modules
│   │   │   ├── Cars/           # Car-related functionality
│   │   │   │   ├── car.controller.ts    # Car controller logic
│   │   │   │   ├── car.interface.ts     # Car data structure definitions
│   │   │   │   ├── car.model.ts         # Car database model
│   │   │   │   ├── car.routes.ts        # Car-related API routes
│   │   │   │   ├── car.service.ts       # Car business logic
│   │   │   ├── Orders/          # Order-related functionality
│   │   │   │   ├── order.controller.ts  # Order controller logic
│   │   │   │   ├── order.interface.ts   # Order data structure definitions
│   │   │   │   ├── order.model.ts       # Order database model
│   │   │   │   ├── order.routes.ts      # Order-related API routes
│   │   │   │   ├── order.service.ts     # Order business logic
│   │   │   │   ├── order.validation.ts  # Order input validation rules
│   ├── config/
│   │   ├── index.ts             # Application configuration
├── app.ts                       # Main application entry point
├── server.ts                    # Server setup and configuration
├── .env                         # Environment variables
├── .prettierrc                  # Prettier configuration
├── .eslint.config.js            # ESLint configuration
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lockfile for dependencies
