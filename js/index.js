/* topBar中的“我的收藏”hover的时候做的变化 */
			let favHover = document.getElementById('fav-hover');
			// onmouseenter效果同hover，当鼠标移动至fav区域的时候，将收藏的图标src位置替换为hover状态的
			let favHoverImg = document.getElementById('fav-hover-img');
			let favHoverWord = document.getElementById('fav-hover-word');
			favHover.onmouseenter = function(){
				favHoverImg .src = 'img/topBar/fav_hover.svg';
				favHoverWord.style.color = '#ff4400';
			}
			favHover.onmouseleave = function(){
				favHoverImg .src = 'img/topBar/fav.svg';
				favHoverWord.style.color = '#3c3c3c';
			}
			
			/* main2部分 - servicesort部分*/
			let specialLis = document.querySelectorAll('.special-li');
			let removeX = document.getElementById('x-remove');
			let itemContents = document.querySelectorAll('.item-content');
			for (let i=0;i<specialLis.length;i++) {
				specialLis[i].onmouseenter = function(){
					for (let j=0;j<specialLis.length;j++) {
						if(i !== j){
							specialLis[j].style.borderBottom = '1px solid red';
						}
						if(i === 3){
							specialLis[j].style.borderBottom = 'none';
						}
					}
				}
				
				specialLis[i].onmouseleave = function(){
					for (let j=0;j<specialLis.length;j++) {
						if(i !== j){
							specialLis[j].style.borderBottom = 'none';
						}
					}
				}
				

			}
			
			
			/* goods部分 */
			let goodsItems = document.querySelectorAll('.goods-item');
			for (let i=0;i<goodsItems.length;i++) {
				goodsItems[i].onmouseover = function(){
					// 设置鼠标进入指定区域（即鼠标悬浮）的时候，图片样式变化
					goodsItems[i].children[0].style.opacity = '.8';
					goodsItems[i].children[0].style.cursor = 'pointer';
					// 商品标题变化
					goodsItems[i].children[1].children[0].style.color= '#ff4400';
					goodsItems[i].children[1].children[0].style.cursor= 'pointer';
					
				}
				goodsItems[i].onmouseout = function(){
					// 设置鼠标离开指定区域（即鼠标悬浮）的时候，图片样式变化
					goodsItems[i].children[0].style.opacity = '1';
					// 商品标题变化
					goodsItems[i].children[1].children[0].style.color= 'black';
					goodsItems[i].children[1].children[0].style.cursor= 'pointer';
					
				}
				
			}
			
			
			/* sideBar侧边栏部分 */
			let sideBar = document.getElementById('sidebar');			
			// console.log(sideBar.style)
			window.onscroll = function(){
				// 获取滚动距离
				let scrollDistance =  document.body.scrollTop || document.documentElement.scrollTop;
				let sideBarClassName = sidebar.className;
				let likeItem = document.getElementById('sidebar-item2')
				let goodsItem = document.getElementById('sidebar-item1')
				// console.log(scrollDistance);
				if(scrollDistance >= 433){
					if(sideBarClassName.search('sidebar-fixed') === -1){
						// console.log()
						sideBar.className += ' sidebar-fixed';
					}				
					// console.log(sideBar.className);	
				}
				
				if(scrollDistance < 433){
					sideBar.className  = 'sidebar';
				}
				
				if (scrollDistance >= 2150) {
					returnTop.style.display = 'block';
					likeItem.className = 'sidebar-item2-active';
					goodsItem.className = ' ';
					
				} else {
					returnTop.style.display = 'none';
					likeItem.className = ' ';
					goodsItem.className = 'sidebar-item1-active';
				}

			}
			
			
			document.getElementById('sidebar-item2').onclick = function(){
				document.body.scrollTop = 2150;
				document.documentElement.scrollTop = 2150;
			}
			
			returnTop.onclick = function(){				
					// 浏览器兼容
					// 使body的滚动距离为0
					document.body.scrollTop = 0;
					// 使html的滚动距离为0
					document.documentElement.scrollTop = 0;
				
			}