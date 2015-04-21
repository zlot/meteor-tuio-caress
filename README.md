# zlot:tuio-caress
Converts TUIO events into W3C Touch Events. This is a meteor wrapper for the [caress server](https://github.com/ekryski/caress-server)/[client](https://github.com/ekryski/caress-client) combo by [ekryski](https://github.com/ekryski/).

## Installation
1. Add the package:`meteor add zlot:tuio-caress`
2. Run `meteor` if you did not have the `meteorhacks:npm` package installed. A `packages.json` file will appear in your project root folder.
3. Add the following to `packages.json`:
```
{
    "socket.io": "1.1.0",
    "caress-server": "0.2.1"
}
```
4. You now have TUIO events converted to W3C Touch Events. In other words, `touchmove`, `touchstart`, etc events are triggered by TUIO input. 

## Notes
Uses a websocket server setup by `socket.io` running on port `5000`.

Caress relies on `socket.io`. Future work would 
be to migrate Caress client/server code to Meteor's [DDP protocol](https://atmospherejs.com/meteor/ddp). 