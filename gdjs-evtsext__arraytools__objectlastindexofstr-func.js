
if (typeof gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr !== "undefined") {
  gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr = {};
gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.idToCallbackMap = new Map();
gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.GDObjectArgObjects1= [];


gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.userFunc0x1923c28 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("ArrayArg");
const value = eventsFunctionContext.getArgument("Value");

eventsFunctionContext.returnValue =
    array.getAllChildrenArray().findLastIndex(child => child.getAsString() === value);

};
gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.userFunc0x1923c28(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.func = function(runtimeScene, ObjectArg, ArrayArg, Value, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ObjectArg": ObjectArg
},
  _objectArraysMap: {
"ObjectArg": gdjs.objectsListsToArray(ObjectArg)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ArrayTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ArrayTools"),
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
if (argName === "ArrayArg") return ArrayArg;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.GDObjectArgObjects1.length = 0;

gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.GDObjectArgObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ArrayTools__ObjectLastIndexOfStr.registeredGdjsCallbacks = [];