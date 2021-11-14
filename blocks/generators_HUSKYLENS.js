Blockly.JavaScript['HUSKYLENS_Setup'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_pinRX = block.getFieldValue('pinRX');
    var number_pinTX = block.getFieldValue('pinTX');  
    var code = `
  #EXTINC #include <HUSKYLENS.h>#END
  #EXTINC #include <PIDLoop.h>#END
  #VARIABLE HUSKYLENS ${variable_instance};#END
  #VARIABLE PIDLoop headingLoop(200, 0, 0, false);#END
  Serial2.begin(9600, SERIAL_8N1, ${number_pinRX}, ${number_pinTX});
  while (!${variable_instance}.begin(Serial2)){}
  `;
    return code;
  };
  Blockly.JavaScript['HUSKYLENS_Update'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'HANDLER');
  var dropdown_HUSKYLENS_ID = block.getFieldValue('HUSKYLENS_ID');
  
  var code = `
    int32_t error;\n
    if (!${variable_instance}.request(${dropdown_HUSKYLENS_ID})) Serial.println(F("recheck the connection!"));\n
    else if(!${variable_instance}.isLearned()) Serial.println(F("Nothing learned!"));\n
    else if(!${variable_instance}.available()) Serial.println(F("No block on the screen!"));\n
    else\n
    {\n
        while (${variable_instance}.available())\n
        {\n
            HUSKYLENSResult result = ${variable_instance}.read();\n
            ${statements_code}\n
            error = (int32_t)result.xTarget - (int32_t)160;\n
            headingLoop.update(error);\n
        }\n  
    }\n`;
  return code;
  };
  Blockly.JavaScript['HUSKYLENS_setAlgorithm'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_setAlgorithm = block.getFieldValue('setAlgorithm');
    var code = `${variable_instance}.writeAlgorithm(${dropdown_setAlgorithm});`;
    return code;
  };
  
  Blockly.JavaScript['HUSKYLENS_getData_BLOCK'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_Block_type = block.getFieldValue('Block_type');
    var code = `result.${dropdown_Block_type}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_getData_ARROW'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_Block_type = block.getFieldValue('Block_type');
    var code = `result.${dropdown_Block_type}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_xCenter'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `result.xCenter`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_yCenter'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `result.yCenter`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_width'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `result.width`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_height'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `result.height`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_ID'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `result.ID`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_speedLeft'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `headingLoop.m_command`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_speedRight'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `-headingLoop.m_command`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HUSKYLENS_saveScreenshot'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.saveScreenshotToSDCard();`;
    return code;
  };
  Blockly.JavaScript['HUSKYLENS_customText'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${variable_instance}.customText(${value_text},${value_x},${value_y});`;
    return code;
  };
  Blockly.JavaScript['HUSKYLENS_setCustomName'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_ID = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${variable_instance}.setCustomName(${value_text},${value_ID});`;
    return code;
  };
