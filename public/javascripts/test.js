// This file provides this namespace to other code
// that may reference this namespace.
// This information is used by the compiler to
// optimize your code.
goog.provide("godzilla.test");
goog.provide("godzilla.test.MessageWriter");

// We want to use some functionality defined in this module.
goog.require("goog.dom");

// A simple object constructor.
// MessageWriter will append messages to our document body with a given prefix
/**
 * @constructor
 */
godzilla.test.MessageWriter = function(prefix) {
  this.prefix = prefix;
}

// Append a message to our document's body
godzilla.test.MessageWriter.prototype.write = function(message) {
  var m = goog.dom.createDom("div", null, this.prefix + message);
  goog.dom.appendChild(document.body, m);
}

// Let's write some messages
// Need to wait for the onload event so that we have loaded
// All of our libraries from goog.require
function execute() {
  var writer = new godzilla.test.MessageWriter("Info: ");
  writer.write("Mothra is coming!!!");
  writer.write("I see your Schwartz is as big as mine.");
}

// Feel free to write more awesome messages


window["execute"] = execute;
