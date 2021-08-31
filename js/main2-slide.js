let curImg = document.getElementById('first-banner-wrap');
			let next = document.querySelector('.arrow-right');
			let prev = document.querySelector('.arrow-left');
			next.onclick = function(){
				next_pic();
			}
			prev.onclick = function(){
				prev_pic();
			}
			
			// 小圆点和轮播图联动
			let dots = document.querySelectorAll('#first-banner-bots span');
			for (let i=0;i<dots.length;i++) {
				dots[i].setAttribute('class','');
			}
			let dotIndex = 0;
			dots[dotIndex].setAttribute('class','on');
			
			function next_pic(){
				let curLoc = parseInt(curImg.style.left);
				if(curLoc === -3120){
					curLoc = -1040
				}else {
					curLoc -=  520;
				}	
				curImg.style.left = curLoc + 'px';
				
				// console.log(dotIndex)
				// 小圆点和轮播图联动
				if(dotIndex<4){
					dots[dotIndex].setAttribute('class','');
					dotIndex++;
				}else {
					dots[dotIndex].setAttribute('class','');
					dotIndex = 0
				}
				dots[dotIndex].setAttribute('class','on');
			}
			function prev_pic(){
				let curLoc = parseInt(curImg.style.left);
					if(curLoc === 0){
						curLoc = -2080
					}else {
						curLoc +=  520;
					}	
					curImg.style.left = curLoc + 'px';
					
					console.log(dotIndex)
					// 小圆点和轮播图联动
					if(dotIndex === 0){
						dots[dotIndex].setAttribute('class','');
						dotIndex = 4
					}else {
						dots[dotIndex].setAttribute('class','');
						dotIndex--;
					}
					dots[dotIndex].setAttribute('class','on');
				}
				
				
				// 图片定时轮播 每过1s
				let timer = null
				function autoPlay(){
				timer =	setInterval(function(){
						next_pic()
					},2000)
				}
				autoPlay()
			
			     // 当鼠标移入轮播图区域时，停止轮播；
				 // 鼠标溢出后，开始自动轮播
				 let container = document.getElementById('first-banner-container');
				 container.onmouseenter = function(){
					 clearInterval(timer);
					 document.querySelector('.arrow-left').style.display = 'inline';
					 document.querySelector('.arrow-right').style.display = 'inline';
					
				 }
                 container.onmouseleave = function(){
					 autoPlay();
					 document.querySelector('.arrow-left').style.display = 'none';
					 document.querySelector('.arrow-right').style.display = 'none';
					 
				 }		