const desarrolladores = document.querySelectorAll('.desarrolladores .intro');
desarrolladores.forEach((categoria) => {
    categoria.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const lista = categoria.querySelector('.lista');
        const alturaRealLista = lista.scrollHeight;
        
        if(!lista.style.maxHeight){
            lista.style.maxHeight = alturaRealLista + 'px';
        } else {
            lista.style.maxHeight = null;
        }

        desarrolladores.forEach((lista) => {
            if(categoria !== lista){
                lista.classList.remove('activa');
                lista.querySelector('.lista').style.maxHeight = null;
            }
            
        });
    });
});

const jug2 = document.querySelectorAll('.jug2 .cup2');
jug2.forEach((nom) => {
    nom.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const desc = nom.querySelector('.desc');
        const alturaRealDesc = desc.scrollHeight;
        
        if(!desc.style.maxHeight){
            desc.style.maxHeight = alturaRealDesc + 'px';
        } else {
            desc.style.maxHeight = null;
        }

        jug2.forEach((desc) => {
            if(nom !== desc){
                desc.classList.remove('activa');
                desc.querySelector('.desc').style.maxHeight = null;
            }
            
        });
    });
});