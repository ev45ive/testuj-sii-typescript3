# Instalacje
node -v 
v20.17.0 ++

npm -v 
10.8.2

git -v 
git version 2.40.1.windows.1

chrome 

vscode
Terminal Ctrl + ~

# GIT
git clone https://bitbucket.org/ev45ive/testuj-sii-typescript3.git
File -> Open folder

F1 -> CLone -> Paste url -> clone from url -> open location

# TypeScript 
npm i -g typescript

where tsc
C:\Program Files\nodejs\tsc

tsc --version
Version 5.6.2

tsc index.ts

# Powershell (as admin?)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

# GIT Bash
F1 -> Select default profile -> Git bash -> View -> New TErminal

# Npm package.json
npm init -y

npm i -D typescript

npm i 

npm run build
npm run dev
npm run ...script..

# Strict 
tsc index.ts --strict 

# target, lib
tsc index.ts --strict --watch --target ES2015 --lib "es2015,dom"

tsc ./src/*.ts --strict --outDir ./dist --lib "esnext,dom" --target esnext

# tsconfig.json
tsc --init 
tsc ./src/*.ts --strict --outDir ./dist --lib "esnext,dom" --target esnext --init

# Semver + clean install
https://semver.org/ 
https://semver.npmjs.com/

npm i   // install from package.json + updates
npm ci  // install exact from package-lock.json - no updates

# DevOps

// build:
git clone
npm install
npm build 

// run:
npm ci
npm start 


