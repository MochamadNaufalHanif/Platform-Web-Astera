
if (typeof gdjs.evtsExt__ArrayTools__ObjectConcatenate !== "undefined") {
  gdjs.evtsExt__ArrayTools__ObjectConcatenate.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__ObjectConcatenate = {};
gdjs.evtsExt__ArrayTools__ObjectConcatenate.idToCallbackMap = new Map();
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArgObjects1= [];
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArg1Objects1= [];
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArg2Objects1= [];


gdjs.evtsExt__ArrayTools__ObjectConcatenate.userFunc0x1961f38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("ArrayArg");
/** @type {gdjs.Variable} */
const otherArray = eventsFunctionContext.getArgument("OtherArray");
/** @type {gdjs.Variable} */
const target = eventsFunctionContext.getArgument("Target");

// Ensure the target is a clean new array
target.castTo("array");
target.clearChildren();

// Copy both arrays inside the new one
for (const variable of array.getAllChildrenArray())
    target.pushVariableCopy(variable);

for (const variable of otherArray.getAllChildrenArray())
    target.pushVariableCopy(variable);

};
gdjs.evtsExt__ArrayTools__ObjectConcatenate.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__ObjectConcatenate.userFunc0x1961f38(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__ObjectConcatenate.func = function(runtimeScene, ObjectArg, ArrayArg, ObjectArg1, OtherArray, ObjectArg2, Target, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ObjectArg": ObjectArg
, "ObjectArg1": ObjectArg1
, "ObjectArg2": ObjectArg2
},
  _objectArraysMap: {
"ObjectArg": gdjs.objectsListsToArray(ObjectArg)
, "ObjectArg1": gdjs.objectsListsToArray(ObjectArg1)
, "ObjectArg2": gdjs.objectsListsToArray(ObjectArg2)
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
if (argName === "OtherArray") return OtherArray;
if (argName === "Target") return Target;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArgObjects1.length = 0;
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArg1Objects1.length = 0;
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArg2Objects1.length = 0;

gdjs.evtsExt__ArrayTools__ObjectConcatenate.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArgObjects1.length = 0;
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArg1Objects1.length = 0;
gdjs.evtsExt__ArrayTools__ObjectConcatenate.GDObjectArg2Objects1.length = 0;


return;
}

gdjs.evtsExt__ArrayTools__ObjectConcatenate.registeredGdjsCallbacks = [];