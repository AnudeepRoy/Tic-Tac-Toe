var x = 0;
var count = 0;
var checkWin = 0;
var win = ['123','456','789', '147', '258', '369', '159', '357'];
var rads,a,b,c,sub;
addTile = (num) =>{
	if(checkWin == 0){
		var curr = 'sq'+num;
		if($('#'+curr).text() == ""){
			var mark = (x==0)? 'X' : 'O';
			$('#'+curr).text(mark);
			x = (x==0)? 1 : 0;
			count +=1;
				for(var i=0; i<win.length; i++){
					sub = win[i].split('');
					a = $('#sq'+sub[0]).text();
					b = $('#sq'+sub[1]).text();
					c = $('#sq'+sub[2]).text();
					if((a != "") && (b != "") && (c != "")){
						if((a == b) && (b == c)){
							rad = $('#sq'+sub[0]).text();
							$.alert({
								title: 'Game Over',
								content : rad + ' has won!'
							});
							$('#sq'+sub[0]).css('color','#ffc107');
							$('#sq'+sub[1]).css('color','#ffc107');
							$('#sq'+sub[2]).css('color','#ffc107');
							checkWin+=1;
						}
					}
				}
			}		
		if((count == 9) && (checkWin == 0)){
			$.alert({
				title: 'Game Over',
				content: "It's a draw"
			});
		}
	}
}