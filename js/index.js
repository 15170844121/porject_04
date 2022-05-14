window.onload = function () {
	let section1 = document.querySelector('.section1')
	let section2 = document.querySelector('.section2')
	let section3 = document.querySelector('.section3')
	let section4 = document.querySelector('.section4')
	let father = document.querySelector('.father')
	let son = document.querySelector('.son')
	let bai = document.querySelector('.section1').querySelector('span')
	let audio = document.querySelector('audio')
	let yinyue = document.querySelector('.yinyue')
	let cuowu = document.querySelector('.cuowu')
	// 定义答案
	let arr = ['龙井', '秦', '汕头', '目中无人', '友', '龙腾虎跃']
	// 实现进度条
	// 获取父元素的宽度
	let fatherWidth = parseFloat(getComputedStyle(father).width)
	setInterval(function () {
		// 获取子元素的宽度 实现百分比的变化
		let sonWidth = parseFloat(getComputedStyle(son).left)
		bai.innerHTML = parseInt(sonWidth / fatherWidth * 100) + '%'
		// console.log(parseInt(sonWidth / fatherWidth));
		if (parseInt(sonWidth / fatherWidth) == 1) {
			section1.style.display = 'none'
			section2.style.display = 'block'
		}

	}, 100)

	// 实现进度条的制作
	// let timer = setInterval(function () {
	// 	// 获取子元素的宽度 实现进度条
	// 	let sonWidth = parseFloat(getComputedStyle(son).left)
	// 	// 定义变量
	// 	let legin = 1
	// 	legin++
	// 	if (sonWidth >= fatherWidth) {
	// 		clearInterval(timer)
	// 	} else {
	// 		sonWidth += legin
	// 	}
	// 	son.style.left = sonWidth + 'px'
	// }, 1)

	// 实现音乐的自动播放
	yinyue.onclick = function () {
		if (audio.paused) {
			audio.play()
			yinyue.classList.add('zhuan')
		} else {
			audio.pause()
			yinyue.classList.remove('zhuan')
		}
	}
	// 实现跳转
	let cai = document.querySelector('.cai')
	cai.onclick = function () {
		section2.style.display = 'none'
		section3.style.display = 'block'
	}
	let kaishi = document.querySelector('.kaishi')
	kaishi.onclick = function () {
		section3.style.display = 'none'
		section4.style.display = 'block'
	}

	// 定义外部变量接收文字
	let text = null
	// 定义变量去判断进行了几次点击事件
	let num = 0
	// 题目点击事件
	let lis = document.querySelector('.all').querySelectorAll('li')
	let meau = document.querySelector('.meau')
	let meau2 = document.querySelector('.meau2')
	let meau3 = document.querySelector('.meau3')
	let meau4 = document.querySelector('.meau4')
	let meau5 = document.querySelector('.meau5')
	let meau6 = document.querySelector('.meau6')
	let xuan = document.querySelector('.xuan').querySelectorAll('li')
	let xuan2 = document.querySelector('.xuan2').querySelectorAll('li')
	let xuan3 = document.querySelector('.xuan3').querySelectorAll('li')
	let xuan4 = document.querySelector('.xuan4').querySelectorAll('li')
	let xuan5 = document.querySelector('.xuan5').querySelectorAll('li')
	let xuan6 = document.querySelector('.xuan6').querySelectorAll('li')
	let tijiao1 = document.querySelector('.tijiao1')
	let tijiao2 = document.querySelector('.tijiao2')
	let tijiao3 = document.querySelector('.tijiao3')
	let tijiao4 = document.querySelector('.tijiao4')
	let tijiao5 = document.querySelector('.tijiao5')
	let tijiao6 = document.querySelector('.tijiao6')
	// 第一题
	lis[0].onclick = function () {
		meau.style.display = 'block'
		// 实现遍历切换图片
		for (let i = 0; i < xuan.length; i++) {
			xuan[i].onclick = function () {
				for (let j = 0; j < xuan.length; j++) {
					xuan[j].children[0].src = './img/hui.png'
					xuan[j].style.color = 'black'
				}
				this.children[0].src = './img/red.png'
				this.style.color = 'red'
				// 获取到文字
				text = this.children[1].innerHTML
			}
		}
		tijiao1.onclick = function () {
			if (text == arr[0]) {
				meau.style.display = 'none'
				lis[0].children[0].src = './img/答对了.png'
				lis[0].children[0].classList.remove('big2')
				num++
			} else {
				cuowu.style.display = 'block'
				setTimeout(function () {
					cuowu.style.display = 'none'
				}, 2000)
			}
		}
		this.onclick = null
	}
	// 第二题
	lis[1].onclick = function () {
		meau2.style.display = 'block'
		text = null
		// 实现遍历切换图片
		for (let i = 0; i < xuan2.length; i++) {
			xuan2[i].onclick = function () {
				for (let j = 0; j < xuan2.length; j++) {
					xuan2[j].children[0].src = './img/hui.png'
					xuan2[j].style.color = 'black'
				}
				this.children[0].src = './img/red.png'
				this.style.color = 'red'
				// 获取到文字
				text = this.children[1].innerHTML
			}
		}
		tijiao2.onclick = function () {
			if (text == arr[1]) {
				meau2.style.display = 'none'
				lis[1].children[0].src = './img/答对了.png'
				lis[1].children[0].classList.remove('big2')
				num++
			} else {
				cuowu.style.display = 'block'
				setTimeout(function () {
					cuowu.style.display = 'none'
				}, 2000)
			}
		}
		this.onclick = null
	}
	// 第三题
	lis[2].onclick = function () {
		meau3.style.display = 'block'
		text = null
		// 实现遍历切换图片
		for (let i = 0; i < xuan3.length; i++) {
			xuan3[i].onclick = function () {
				for (let j = 0; j < xuan3.length; j++) {
					xuan3[j].children[0].src = './img/hui.png'
					xuan3[j].style.color = 'black'
				}
				this.children[0].src = './img/red.png'
				this.style.color = 'red'
				// 获取到文字
				text = this.children[1].innerHTML
			}
		}
		tijiao3.onclick = function () {
			if (text == arr[2]) {
				meau3.style.display = 'none'
				lis[2].children[0].src = './img/答对了.png'
				lis[2].children[0].classList.remove('big2')
				num++
			} else {
				cuowu.style.display = 'block'
				setTimeout(function () {
					cuowu.style.display = 'none'
				}, 2000)
			}
		}
		this.onclick = null
	}
	// 第四题
	lis[3].onclick = function () {
		meau4.style.display = 'block'
		text = null
		// 实现遍历切换图片
		for (let i = 0; i < xuan4.length; i++) {
			xuan4[i].onclick = function () {
				for (let j = 0; j < xuan4.length; j++) {
					xuan4[j].children[0].src = './img/hui.png'
					xuan4[j].style.color = 'black'
				}
				this.children[0].src = './img/red.png'
				this.style.color = 'red'
				// 获取到文字
				text = this.children[1].innerHTML
			}
		}
		tijiao4.onclick = function () {
			if (text == arr[3]) {
				meau4.style.display = 'none'
				lis[3].children[0].src = './img/答对了.png'
				lis[3].children[0].classList.remove('big2')
				num++
			} else {
				cuowu.style.display = 'block'
				setTimeout(function () {
					cuowu.style.display = 'none'
				}, 2000)
			}
		}
		this.onclick = null
	}
	// 第五题
	lis[4].onclick = function () {
		meau5.style.display = 'block'
		text = null
		// 实现遍历切换图片
		for (let i = 0; i < xuan5.length; i++) {
			xuan5[i].onclick = function () {
				for (let j = 0; j < xuan5.length; j++) {
					xuan5[j].children[0].src = './img/hui.png'
					xuan5[j].style.color = 'black'
				}
				this.children[0].src = './img/red.png'
				this.style.color = 'red'
				// 获取到文字
				text = this.children[1].innerHTML
			}
		}
		tijiao5.onclick = function () {
			if (text == arr[4]) {
				meau5.style.display = 'none'
				lis[4].children[0].src = './img/答对了.png'
				lis[4].children[0].classList.remove('big2')
				num++
			} else {
				cuowu.style.display = 'block'
				setTimeout(function () {
					cuowu.style.display = 'none'
				}, 2000)
			}
		}
		this.onclick = null
	}
	// 第六题
	lis[5].onclick = function () {
		meau6.style.display = 'block'
		text = null
		// 实现遍历切换图片
		for (let i = 0; i < xuan6.length; i++) {
			xuan6[i].onclick = function () {
				for (let j = 0; j < xuan6.length; j++) {
					xuan6[j].children[0].src = './img/hui.png'
					xuan6[j].style.color = 'black'
				}
				this.children[0].src = './img/red.png'
				this.style.color = 'red'
				// 获取到文字
				text = this.children[1].innerHTML
			}
		}
		tijiao6.onclick = function () {
			if (text == arr[5]) {
				meau6.style.display = 'none'
				lis[5].children[0].src = './img/答对了.png'
				lis[5].children[0].classList.remove('big2')
				num++
			} else {
				cuowu.style.display = 'block'
				setTimeout(function () {
					cuowu.style.display = 'none'
				}, 2000)
			}
		}
		this.onclick = null
	}
	let my = document.querySelector('.my')
	let nextzhe = document.querySelector('.nextzhe')
	let back = document.querySelector('.back')
	my.onclick = function () {
		nextzhe.style.display = 'block'
	}
	back.onclick = function () {
		nextzhe.style.display = 'none'
		section4.style.display = 'none'
		section2.style.display = 'block'
	}
	// 定义定时器 判断都填写正确
	setInterval(function () {
		if (num == 6) {
			my.classList.add('yi')
		}
	}, 200)
}