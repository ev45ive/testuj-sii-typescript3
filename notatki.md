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
tsc ./src/*.ts --strict --outDir ./dist --lib "esnext,dom" --tarstepsget esnext --init

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

# NPM Outdated
npm outdated
Package     Current  Wanted  Latest  Location                 Depended by
typescript    5.6.2   5.5.4   5.6.2  node_modules/typescript  1_migracja

# JSDOC + allowJS / migration
https://jsdoc.app/

tsconfig.json / jsconfig.json

# Declaration .d.ts
tsc ./src/lib/lib.js --allowJS --declaration --emitDeclarationOnly

lib.d.ts

# Web project setup 

npm init -y 

npm i -D typescript 

echo 'node_modules' >> .gitignore
echo 'dist' >> .gitignore

tsc ./src/*.ts --strict --outDir ./dist --lib "esnext,dom" --target esnext  --init

// add to package.json scripts 
tsc   

# Backend project setup 

npm init -y 

npm i -D typescript 

echo 'node_modules' >> .gitignore
echo 'dist' >> .gitignore

tsc ./src/*.ts --strict --outDir ./dist --lib "esnext" --target esnext  --init

npm i --save-dev @types/node

# NextJS
npx create-next-app@latest


√ What is your project named? ... my-app
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes
Creating a new Next.js app in C:\Projects\testuj-sii-typescript3\my-app.


# VS Code extension - Task explorer
https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer

