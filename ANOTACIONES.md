Etapa 3:

# Cambié la estetica por completo con respecto a la etapa 2 asi como tambien la funcionalidad, ya que me traia bastantes problemas.
# El Form (Mal ubicado) en la etapa 2 , ahora esta disponible en 2 variantes -> Carrito de compra y formulario de direccion de entrega.
# Utilice assets.js para declarar todo lo relacionado a obtencion de datos:
# prod_List = items del catalogo
# product_list = fue utilizado para filtrar entre los tipos de productos.

# Queda pendiente temas esteticos de la pagina, tales como tamaño de imagenes , fuentes y mejores.

# Tema a solucionar : Footer. No se donde hice mal, tengo 2 footer en la pagina principal, me queda pendiente para revisarlo.

Link : Netlify -> etapa3.netlify.app
Link : GitHub - > https://github.com/GuidoDagostino/etapa_3.git

# Subi el proyecto de forma manual, funciona correctamente..
# De manera Local funciona 10 puntos.

# Falla al subir a netlify desde GitHUB:

3:08:17 PM: build-image version: ecdc8b770f4a0193fd3f258c1bc6029e681813a4 (focal)
3:08:17 PM: buildbot version: 16ead92caa9f8e177f18ab47e138c7dc936e93d8
3:08:17 PM: Fetching cached dependencies
3:08:18 PM: Failed to fetch cache, continuing with build
3:08:18 PM: Starting to prepare the repo for build
3:08:18 PM: No cached dependencies found. Cloning fresh repo
3:08:18 PM: git clone --filter=blob:none https://github.com/GuidoDagostino/etapa_3
3:08:18 PM: Preparing Git Reference refs/heads/main
3:08:20 PM: Starting to install dependencies
3:08:20 PM: Python version set to 3.8
3:08:21 PM: Attempting Ruby version 2.7.2, read from environment
3:08:22 PM: Using Ruby version 2.7.2
3:08:22 PM: Started restoring cached go cache
3:08:22 PM: Finished restoring cached go cache
3:08:24 PM: go version go1.19.13 linux/amd64
3:08:25 PM: Using PHP version 8.0
3:08:27 PM: v18.20.4 is already installed.
3:08:27 PM: Now using node v18.20.4 (npm v10.7.0)
3:08:27 PM: Enabling Node.js Corepack
3:08:27 PM: Started restoring cached build plugins
3:08:27 PM: Finished restoring cached build plugins
3:08:27 PM: Started restoring cached corepack dependencies
3:08:27 PM: Finished restoring cached corepack dependencies
3:08:27 PM: No npm workspaces detected
3:08:27 PM: Started restoring cached node modules
3:08:27 PM: Finished restoring cached node modules
3:08:27 PM: Installing npm packages using npm version 10.7.0
3:08:36 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
3:08:31 PM: added 282 packages, and audited 283 packages in 3s
3:08:31 PM: 105 packages are looking for funding
3:08:31 PM:   run `npm fund` for details
3:08:31 PM: found 0 vulnerabilities
3:08:31 PM: npm packages installed
3:08:31 PM: Successfully installed dependencies
3:08:32 PM: Starting build script
3:08:33 PM: Detected 1 framework(s)
3:08:33 PM: "vite" at version "5.4.5"
3:08:33 PM: Section completed: initializing
3:08:35 PM: ​
3:08:35 PM: Netlify Build                                                 
3:08:35 PM: ────────────────────────────────────────────────────────────────
3:08:35 PM: ​
3:08:35 PM: ❯ Version
3:08:35 PM:   @netlify/build 29.54.2
3:08:35 PM: ​
3:08:35 PM: ❯ Flags
3:08:35 PM:   accountId: 65e901a9769f3575b98d4c3e
3:08:35 PM:   baseRelDir: true
3:08:35 PM:   buildId: 66e87402da90374f4941804f
3:08:35 PM:   deployId: 66e87402da90374f49418051
3:08:35 PM: ​
3:08:35 PM: ❯ Current directory
3:08:35 PM:   /opt/build/repo
3:08:35 PM: ​
3:08:35 PM: ❯ Config file
3:08:35 PM:   /opt/build/repo/netlify.toml
3:08:35 PM: ​
3:08:35 PM: ❯ Context
3:08:35 PM:   production
3:08:35 PM: ​
3:08:35 PM: build.command from netlify.toml                               
3:08:35 PM: ────────────────────────────────────────────────────────────────
3:08:35 PM: ​
3:08:35 PM: $ npm run build
3:08:35 PM: > bc-71370-integrador-etapa-3@0.0.0 build
3:08:35 PM: > vite build
3:08:35 PM: vite v5.4.5 building for production...
3:08:35 PM: transforming...
3:08:35 PM: ✓ 3 modules transformed.
3:08:35 PM: x Build failed in 74ms
3:08:35 PM: error during build:
3:08:35 PM: Could not resolve "./Context/StoreContext" from "src/main.jsx"
3:08:35 PM: file: /opt/build/repo/src/main.jsx
3:08:35 PM:     at getRollupError (file:///opt/build/repo/node_modules/rollup/dist/es/shared/parseAst.js:392:41)
3:08:35 PM:     at error (file:///opt/build/repo/node_modules/rollup/dist/es/shared/parseAst.js:388:42)
3:08:35 PM:     at ModuleLoader.handleInvalidResolvedId (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:19256:24)
3:08:35 PM:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:19216:26
3:08:35 PM: ​
3:08:35 PM: "build.command" failed                                        
3:08:35 PM: ────────────────────────────────────────────────────────────────
3:08:35 PM: ​
3:08:35 PM:   Error message
3:08:35 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
3:08:35 PM: ​
3:08:35 PM:   Error location
3:08:35 PM:   In build.command from netlify.toml:
3:08:35 PM:   npm run build
3:08:35 PM: ​
3:08:35 PM:   Resolved config
3:08:35 PM:   build:
3:08:35 PM:     command: npm run build
3:08:35 PM:     commandOrigin: config
3:08:35 PM:     publish: /opt/build/repo/dist
3:08:35 PM:     publishOrigin: config
3:08:36 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
3:08:36 PM: Failing build: Failed to build site
3:08:36 PM: Finished processing build request in 18.87s