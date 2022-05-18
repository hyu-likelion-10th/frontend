const linkArr=document.querySelectorAll('.blog-header-item')

const development=document.querySelector('.develop')

const home=document.querySelector('.home')

home.addEventListener('click',()=>{
    window.location.href="/index.html"
})


const linkFn=(link,state)=>{
    console.log(link,state)
    if(state==='active')return
    history.pushState(state,'',`/${link}.html`)
}

const linkToEvent=()=>{
    linkArr.forEach((node)=>{
        const link=node.classList[1]
        const active=node.classList[2]
        node.addEventListener('click',()=>{
            console.log(link,active)
            if (active === "active") return;
            history.pushState(null, "", `/${link}.html`);
        })
    })
}

linkToEvent()
