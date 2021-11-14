module.exports = [
	{
		name : "HUSKYLENS",
		blocks : [
		  'HUSKYLENS_Setup',
		  'HUSKYLENS_saveScreenshot',
          {
				xml:
            	   `<block type="HUSKYLENS_customText">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
			},
			{
				xml:
            	   `<block type="HUSKYLENS_setCustomName">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Jack</field>
                            </shadow>
                        </value>
                        <value name="ID">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
			},
          'HUSKYLENS_Update',
          'HUSKYLENS_setAlgorithm',
          'HUSKYLENS_getData_BLOCK',
          'HUSKYLENS_getData_ARROW',
          // 'HUSKYLENS_xCenter',
          // 'HUSKYLENS_yCenter',
          // 'HUSKYLENS_widht',
          // 'HUSKYLENS_height',
          // 'HUSKYLENS_ID',
          
          'HUSKYLENS_speedLeft',
          'HUSKYLENS_speedRight',
			
		]
	}	
];