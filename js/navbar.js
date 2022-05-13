//generating our html code with javascript
document.querySelector("header").innerHTML =
`
<div class="navbarContainer">
<nav class="left">
<ul>
<li><i class="fa-solid fa-bars" id="mobileMenu"></i></li>
<li>
<a href="./index.html" class="fa-solid fa-house" id="homeButton"></a>
<a href="./index.html" id="homeText">Cryptocurrency</a>
</li>
</ul>
</nav>
<nav id="navbarItems">
<ul>
<li><a href="./page1.html">CryptoCurrencys</a></li>
<li><a href="./page2.html">Todays Usage</a></li>
<li><a href="./page3.html">Past Usage</a></li>
<li><a href="./page4.html">Predicted Usage</a></li>
</ul>
</nav>
<nav class="navbarItems right">
<ul>
<li><i class="fa-solid fa-search"></i></li>
</ul>
</nav>
</div>
`;

//event listeners
        const btn = document.getElementById("mobileMenu");
        const menu = document.getElementById("navbarItems");
        btn.onclick = function () {
        if (menu.style.display == "flex") {
        menu.style.display = "none";
                btn.className = btn.className.replace("fa-x", "fa-bars");
        } else {
        menu.style.display = "flex";
                btn.className = btn.className.replace("fa-bars", "fa-x");
        }
        };
