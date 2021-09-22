document.querySelectorAll(".modal-container img").forEach(el=>{
	el.addEventListener("click",fuction(ev){
		this.parentNode.classList.add("active")
	})
})