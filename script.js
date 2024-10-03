let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Clínica Psicologia";

let body = document.querySelector("body");
body.appendChild(titulo);


let servicos = document.createElement("div");

servicos.innerHTML = `
<h2> Atendimento Psicologia</h2>
<p> Atendimento realizado por psicólogos com mais de 10 anos de experência.</p>
<p>Valor R$ 250,00</p>
<h2> Atendimento Psicanálise</h2>
<p>Atendimento realizado por psicanalistas com mais de 10 anos de experiência.</p>
<p> Valor R$ 180,00 </p>
`
body.appendChild(servicos);
