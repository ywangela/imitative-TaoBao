 let liAs = document.querySelectorAll('.notice ul>li>a');
 
 // console.log(lis);
 let notConts = document.querySelectorAll('.notice-content>div');
 
 
 for (let i=0;i<liAs.length;i++) { 
 	liAs[i].onmouseover = function(){
        if(i === 0){
			liAs[0].style.borderBottom = '2px solid #ff4400';
		}
		if( i !== 0 ){
			liAs[0].style.borderBottom = 'none';
		}
		for (let j=0;j<notConts.length;j++) {
			notConts[j].style.display = 'none';
		}
		notConts[i].style.display = 'block';
	}	
	
 }