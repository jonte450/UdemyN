function hex_to_decimal(num){
	var convert;
	switch(num){
      case 'A':
      convert = 10;
      break;
      case 'B':
      convert = 11;
      break;
      case 'C':
      convert = 12;
      break;
      case 'D':
      convert = 13;
      break;
      case 'E':
      convert = 14;
      break;
      case 'F':
      convert = 15;
      break;
}
return convert;
}

function hex_to_rgb(con){
	var first = true;
	var sum = 0;
	for(check of con){
		if(isNaN(check)){
		if (first) {
        sum += 16*hex_to_decimal(check);
        first = false;
        }else{
        	sum += hex_to_decimal(check); 
        }
		}
		if(isNaN(check) === false){
        if (first) {
        sum += 16*parseInt(check);
        first = false;
        }else{
        	sum += parseInt(check); 
        }	
        } 

	}
	return sum;
}

function rgb_to_hex(num){
    var counter = 0;
    let div = num;
    while(div > 0){
    	div -= 16;
    	counter++;
    }
    return counter-1;
}

function hex_rgb_con(convert,type){
	var rgb_arr = [];
	var hex_arr = [];
	if(type === "RGB"){
      rgb_arr.push(hex_to_rgb(convert.substr(1,2)));
      rgb_arr.push(hex_to_rgb(convert.substr(3,2)));
      rgb_arr.push(hex_to_rgb(convert.substr(5,2)));
      console.log("R "+rgb_arr[0] +" G " + rgb_arr[1]+" B " +rgb_arr[2]);
	}
	else if(type === "HEX"){
		var con_hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
		var hex = "#";
		hex = hex + con_hex[rgb_to_hex(convert[0])];
		hex = hex + con_hex[convert[0]%16];
        hex = hex + con_hex[rgb_to_hex(convert[1])];
        hex = hex + con_hex[convert[1]%16];
        hex = hex + con_hex[rgb_to_hex(convert[2])];
        hex = hex + con_hex[convert[2]%16];
        console.log(hex); 
	}

}

hex_rgb_con("#91FF4A","RGB");
hex_rgb_con("#BBFBDB","RGB");
hex_rgb_con([145,255,74],"HEX");
hex_rgb_con([187,251,219],"HEX");
