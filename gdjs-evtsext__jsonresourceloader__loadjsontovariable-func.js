
if (typeof gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable !== "undefined") {
  gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable = {};
gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.idToCallbackMap = new Map();


gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.userFunc0x19ae4a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
//@ts-ignore
const variable = eventsFunctionContext.getArgument("Variable");
variable.fromJSObject(
    runtimeScene
        .getGame()
        .getJsonManager()
        .getLoadedJson(eventsFunctionContext.getArgument("Resource"))
);

};
gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.userFunc0x19ae4a8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.func = function(runtimeScene, Resource, Variable, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("JSONResourceLoader"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("JSONResourceLoader"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Resource") return Resource;
if (argName === "Variable") return Variable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__JSONResourceLoader__LoadJSONToVariable.registeredGdjsCallbacks = [];