 let curImg1 = document.getElementById('second-banner-wrap');
 			let next1 = document.querySelector('.arrow1-right');
 			let prev1 = document.querySelector('.arrow1-left');
 			next1.onclick = function(){
 				next1_pic();
 			}
 			prev1.onclick = function(){
 				prev1_pic();
 			}
 			
 			// // 小圆点和轮播图联动
 			// let dots = document.querySelectorAll('#first-banner-bots span');
 			// for (let i=0;i<dots.length;i++) {
 			// 	dots[i].setAttribute('class','');
 			// }
			let slideIndex = document.getElementById('slide-index');
 			let dot1Index = 1;
 			// dots[dotIndex].setAttribute('class','on');
 			
 			function next1_pic(){
 				let curLoc1 = parseInt(curImg1.style.left);
 				if(curLoc1 === -3120){
 					curLoc1 = -1040
 				}else {
 					curLoc1 -=  520;
 				}	
 				curImg1.style.left = curLoc1 + 'px';
 				
 				// console.log(dotIndex)
 				// 小圆点和轮播图联动
 				if(dot1Index<5){
 					// dots[dotIndex].setAttribute('class','');
 					dot1Index++;
 				}else {
 					// dots[dotIndex].setAttribute('class','');
 					dot1Index = 1
 				}
 				// dots[dotIndex].setAttribute('class','on');
				// console.log(dot1Index);
				slideIndex.innerText = dot1Index;
 			}
 			function prev1_pic(){
 				let curLoc1 = parseInt(curImg1.style.left);
 					if(curLoc1 === 0){
 						curLoc1 = -2080
 					}else {
 						curLoc1 +=  520;
 					}	
 					curImg1.style.left = curLoc1 + 'px';
 					
 					// console.log(dotIndex)
 					// 小圆点和轮播图联动
 					if(dot1Index === 1){
 						// dots[dotIndex].setAttribute('class','');
 						dot1Index = 5
 					}else {
 						// dots[dotIndex].setAttribute('class','');
 						dot1Index--;
 					}
 					// dots[dotIndex].setAttribute('class','on');
					slideIndex.innerText = dot1Index;
 				}
 				
 				
 				// 图片定时轮播 每过1s
 				let timer1 = null
 				function autoPlay1(){
 				timer1 = setInterval(function(){
 						next1_pic()
 					},2000)
 				}
 				autoPlay1()
 			
 			     // 当鼠标移入轮播图区域时，停止轮播；
 				 // 鼠标溢出后，开始自动轮播
 				 let container1 = document.getElementById('second-banner-container');
 				 container1.onmouseenter = function(){
 					 clearInterval(timer1);
					 document.querySelector('.arrow1-left').style.display = 'inline';
					 document.querySelector('.arrow1-right').style.display = 'inline';
 					
 				 }
                  container1.onmouseleave = function(){
 					 autoPlay1();
					 document.querySelector('.arrow1-left').style.display = 'none';
					 document.querySelector('.arrow1-right').style.display = 'none';
 					 
 				 }		