# Weather App

Welcome to **Weather App**, a showcase application demonstrating the integration and use of custom modules and OpenMobileHub (OMH) packages in a React Native environment. This application highlights the capabilities of OMH modules, including maps and authentication, as well as custom components and plugins specifically designed for React Native.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Packages Used](#packages-used)
- [License](#license)

## Features

- **Custom Modules**: Explore various custom components such as range sliders, conic gradients, and save-file pickers.
- **OpenMobileHub (OMH) Integrations**:
   - **Maps Integration**: Provides support for multiple map providers like Google Maps and OpenStreetMap using `@openmobilehub/maps-core`.
   - **Authentication**: Supports Google authentication via `@openmobilehub/auth-google`.
   - **Storage Solutions**: Integrates with Google Drive storage for seamless data management.
- **React Native Essentials**: Built with popular libraries and components for optimized cross-platform performance on iOS and Android.

## Requirements

- **Node.js**: >= 18
- **Yarn**: >= 4.0.2
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/your-username/weather_app.git
cd weather_app
yarn install
```

### Configure Environment Variables
This project uses environment variables for configuration. Create a .env file in the root of the project, and set any required environment variables (e.g., API keys, configuration options).

### Run the Application
To launch the app on an Android emulator or iOS simulator:

```bash
#android
yarn android

#ios
yarn ios
```
### Running tests

```bash
yarn test
```
### Scripts

Here are some of the key scripts defined in the package.json:

	•	yarn android: Run the app on an Android emulator.
	•	yarn ios: Run the app on an iOS simulator.
	•	yarn lint: Run ESLint for code quality checks.
	•	yarn start: Start the Metro bundler for React Native.
	•	yarn build:android and yarn build:ios: Build the app for production using Fastlane.
	•	yarn codegen:android and yarn codegen:ios: Generate code artifacts from schema files for Android and iOS.

### Packages used
This app includes both core dependencies and custom packages that enhance functionality:

#### Core OMH Packages
- **Authentication**: @openmobilehub/auth-core, @openmobilehub/auth-google
	- **Maps: @openmobilehub/maps-core, @openmobilehub/maps-plugin-googlemaps, @openmobilehub/maps-plugin-openstreetmap
	•	Storage: @openmobilehub/storage-core, @openmobilehub/storage-googledrive

#### Custom and Linked Packages

	•	Custom UI Components: conic-gradient-package, range-slider-package
	•	Native Integrations: app-info-package, save-file-picker-package, react-native-expose-location

#### Additional Libraries

	•	React Navigation: For app navigation and routing.
	•	React Query: For data fetching and caching.
	•	Lottie: For animations.
	•	Testing: Jest, Testing Library, and MSW (Mock Service Worker) for a comprehensive testing setup.

### License

This project is licensed under the MIT License.
