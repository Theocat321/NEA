/**
 * File: /home/adamo/Adam/Coding/NEA/testingRegex.js
 * Project: /home/adamo/Adam/Coding/NEA
 * Created Date: Thursday, November 17th 2022, 11:28:41 am
 * Author: Adam O'Neill
 * -----
 * Last Modified: Thu Nov 17 2022
 * Modified By: Adam O'Neill
 * -----
 * Copyright (c) 2022 Adam O'Neill
 * ------------------------------------
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


const astring = "Th/is () i.s a, punctuated {}               @' string ?\!£$%%^&*()_+-=}{#~'@:;";
const output = astring.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'@?£+]/g, "").replace(/  +/g, ' ' ,"");


console.log(output);