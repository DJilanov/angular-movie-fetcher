## Description

Sample project based on
Angular 7

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app into develop mode. The port which it uses is 4200

### `npm run build`

Build the app. The result will be at build folder

### `npm run lint`

Runs linting script and checks the code for errors

### `npm run test`

Runs all of the BE tests from the tests folder

## Known issues

1. If you are using windows and doesn't have Visual Studio, you are most likely recieving:
    MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe" 

This error is comning from the SASS module and it is easy fixable by doing this using administrator:
    npm install --global --production windows-build-tools