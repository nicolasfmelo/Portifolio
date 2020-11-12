const add = document.createElement("span")
add.className = "social"
const social = document.createElement("a") 
social.href = 'https://t.me/Nicolas_melo_CV';
social.target = "_blank"
social.innerText = 'Telegram';
add.appendChild(social)
const target = {
    currentFollowers: "https://t.me/Nicolas_melo_CV",
    btn: document.querySelector("a.btn"),
    fw: document.querySelector("span.followers")
  };
  
  const follow = () => {
    target.btn.innerHTML = 'Contato <i class="fas fa-user-times"></i>';
    target.fw.textContent = target.currentFollowers;
    target.fw.replaceWith(add)
    target.btn.classList.toggle("following");
  }
  