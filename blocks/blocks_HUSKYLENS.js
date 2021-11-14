Blockly.Blocks['HUSKYLENS_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Setup")
        .appendField("pin RX (Green)")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pinRX")
        .appendField("pin TX (Blue)")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pinTX");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3dc45c");
 this.setTooltip("setup HUSKYLENS camera");
 this.setHelpUrl("");
  }
};
Blockly.Blocks["HUSKYLENS_Update"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField(' Data Update at')
        .appendField(new Blockly.FieldDropdown([["All"," "], ["ID1","1"], ["ID2","2"], ["ID3","3"], ["ID4","4"], ["ID5","5"], ["ID6","6"]]), "HUSKYLENS_ID");
    this.appendStatementInput('HANDLER');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#3dc45c");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['HUSKYLENS_setAlgorithm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("SetAlgorithm")
        .appendField(new Blockly.FieldDropdown([["Face Recognition","ALGORITHM_FACE_RECOGNITION"]
                                              , ["Object Tracking","ALGORITHM_OBJECT_TRACKING"]
                                              , ["Object Recognition","ALGORITHM_OBJECT_RECOGNITION"]
                                              , ["Line Tracking","ALGORITHM_LINE_TRACKING"]
                                              , ["Color Recognition","ALGORITHM_COLOR_RECOGNITION"]
                                              , ["Tag Recognition","ALGORITHM_TAG_RECOGNITION"]
                                              , ["Object classification","ALGORITHM_OBJECT_CLASSIFICATION"]]), "setAlgorithm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3dc45c");
 this.setTooltip("read Current from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_getData_BLOCK'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Get block type")
        .appendField(new Blockly.FieldDropdown([["x Center","xCenter"], ["y Center","yCenter"], ["Width","width"], ["Height","height"], ["ID","id"]]), "Block_type");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_getData_ARROW'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Get arrow type ")
        .appendField(new Blockly.FieldDropdown([["X Origin","xOrigin"], ["Y Origin","yOrigin"], ["X Target","xTarget"], ["Y Target","yTarget"], ["ID","id"]]), "Block_type");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_xCenter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Read position Center of (X)");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_yCenter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Read position Center of (Y)");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_widht'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Read widht of object");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Read height of object");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_ID'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("Read ID object");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_speedLeft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("SpeedLeft");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_speedRight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("SpeedRight");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#3dc45c");
 this.setTooltip("Read ID object");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_saveScreenshot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("SaveScreenshotToSDCard");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3dc45c");
 this.setTooltip("read Current from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_customText'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("CustomText");
    this.appendValueInput("text")
        .setCheck(null);
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("at x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3dc45c");
 this.setTooltip("read Current from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['HUSKYLENS_setCustomName'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HUSKYLENS_1",null,["Plugin.HUSKYLENS_ESP"],["Plugin.HUSKYLENS_ESP"]), "instance")
        .appendField("CustomName");
    this.appendValueInput("text")
        .setCheck(null);
    this.appendValueInput("ID")
        .setCheck(null)
        .appendField("at ID");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3dc45c");
 this.setTooltip("read Current from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
