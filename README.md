# Marketplace 2.0

## Dependencies

### npm install
```
npm install
``` 

### json-server
```
npm install -g json-server
```

### react-router-dom
```
npm install react-router-dom
```

### express
```
npm install express
```

### node-fetch
```
npm install node-fetch
```

### cors
```
npm install cors
```

## Starting the application
for each step you will need a different terminal window

### start json server
```
json-server --watch db.json --port 3004 --routes routes.json
```

### start middleware node js server
navigate to src/server, 
```
e.g. cd src/server
```

```
node server
```

### start react app
```
yarn start
```