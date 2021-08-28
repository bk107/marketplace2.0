# Marketplace 2.0

## Dependencies

### json-server
sudo this in case it fails, it loves to be treated like that
```
npm install -g json-server
```

### npm install
```
npm install
``` 

## Starting the application
for each step you will need a different terminal window

### start json server
```
json-server --watch db.json --port 3004 --routes routes.json
```

### start middleware node js server
navigate to src/server, e.g.
```
cd src/server
```
then
```
node server
```

### start react app
```
yarn start
```
