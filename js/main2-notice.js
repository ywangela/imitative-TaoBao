 let lis = document.querySelectorAll('.notice ul>li');
 // console.log(lis);
 let notConts = document.querySelectorAll('.notice-content>div');
 
 
 for (let i=0;i<lis.length;i++) { 
 	lis[i].onmouseover = function(){
        if(i === 0){
			lis[0].children[0].style.borderBottom = '2px solid #ff4400';
		}
		if( i !== 0 ){
			lis[0].children[0].style.borderBottom = 'none';
		}
		for (let j=0;j<notConts.length;j++) {
			notConts[j].style.display = 'none';
		}
		notConts[i].style.display = 'block';
	}
	
	
 }