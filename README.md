# Vessel

Vessel is an Angular webapp developed as a project for Avans Hogeschool.

## Contributors

FSGabrsek

## Testing strategy

All PR's on the development and master branches will be tested. All tests must pass before pushes may be done to the master branch

#### Test status

**development**<br>
[![Run tests on push](https://github.com/FSGabrsek/Vessel-WebApp/actions/workflows/npm-test-push.yml/badge.svg?branch=development)](https://github.com/FSGabrsek/WatchList/actions/workflows/npm-test-push.yml)

**master**<br>
[![Run tests on push](https://github.com/FSGabrsek/Vessel-WebApp/actions/workflows/npm-test-push.yml/badge.svg?branch=master)](https://github.com/FSGabrsek/WatchList/actions/workflows/npm-test-push.yml)

## Deployment strategy

Vessel is hosted using Firebase Hosting, deployment is done via github Actions. For a build to be deployed all tests have to pass.
PR's on the development branch will be deployed to a firebase preview channel for review of new features. PR's on the master branch will be deployed to the live firebase channel for use in production.

#### Deployment status

**preview**<br>
[![Deplo to Firebase Hosting preview channel on PR Merge](https://github.com/FSGabrsek/Vessel-WebApp/actions/workflows/firebase-hosting-preview-pull-request.yml/badge.svg?branch=development)](https://github.com/FSGabrsek/WatchList/actions/workflows/firebase-hosting-preview-pull-request.yml)

**live**<br>
[![Deploy to Firebase Hosting live channel on PR Merge](https://github.com/FSGabrsek/Vessel-WebApp/actions/workflows/firebase-hosting-live-pull-request-merge.yml/badge.svg?branch=master)](https://github.com/FSGabrsek/WatchList/actions/workflows/firebase-hosting-live-pull-request-merge.yml)

## Branch naming conventions

- ```<type>/<issue>```
- feat - actual feature implementation
- style - code style and code clean up
- test - actual test implementation
- fix - bug fix
- refactor - refactoring that doesn't affect the behavior of the code
- config - github enviroment changes
- Example - ```fix/Vessel-5```

