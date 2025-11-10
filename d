warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/package.json b/package.json[m
[1mindex e92efd1..24158ca 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -6,10 +6,10 @@[m
   "scripts": {[m
     "dev": "vite",[m
     "build": "vite build",[m
[31m-    "predeploy": "npm run build",[m
[31m-    "deploy": "gh-pages -d dist",[m
     "lint": "eslint .",[m
[31m-    "preview": "vite preview"[m
[32m+[m[32m    "preview": "vite preview",[m
[32m+[m[32m    "predeploy": "npm run build",[m
[32m+[m[32m"deploy": "gh-pages -d dist"[m
   },[m
   "dependencies": {[m
     "@emotion/react": "^11.14.0",[m
