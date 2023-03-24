# Relógio




| :bookmark_tabs: Informações |     |
| -------------  | --- |
| :sparkles: Nome        | Relógio
| :label: Tecnologias | <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg" title="CSS3" alt="CSS" width="40" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript"  width="40" height="40"/>&nbsp;

Nesse Projeto eu decidi testar um pouco de JavaScript, depois de fazer a base do HTML E CSS criei uma Function no JavaScript com variáveis que leem o horário atual do PC `var data = new Date(), var hora = data.getHours()`, depois adicionei um If para caso o horário fosse 0 ou menor que 12 horas `if(hora >= 0 && hora < 12.00)` ele mostraria a primeira imagem `img.src = 'octom.jpeg'`, com uma cor de fundo mais clara `document.body.style.background = '#AEB299'` e uma mensagem de bom dia `msg.innerHTML = Agora são ${hora} horas, msg2.innerHTML = 'Bom Dia!'`.  

![Captura de tela 2023-03-24 144900](https://user-images.githubusercontent.com/123005142/227624931-6c330475-b959-4d79-a414-8a25cfaca958.png)

Depois adicionei um Else If caso o horário fosse entre 12 e menor que  18 horas `else if (hora >= 12.00 && hora < 18.00)`, no qual mostraria a segunda imagem com um fundo alaranjado e uma mensagem de boa tarde.

![Captura de tela 2023-03-24 144955](https://user-images.githubusercontent.com/123005142/227630588-83c6079a-2dce-4908-a36d-ae8c18ee1b4b.png)

E por fim um Else para se caso não fosse nenhum resultado dos anteriores ele carregaria a terceira imagem, um fundo roxo e uma mensagem de boa noite.

![Captura de tela 2023-03-24 145211](https://user-images.githubusercontent.com/123005142/227631006-cbfb9bbd-77bd-41ac-bb8c-ef7f61c4d195.png)






## Detalhes do projeto

O objetivo desse projeto era dar os primeiros passos no JavaScript, consegui aprender comandos que conseguem interagir com funções do próprio computador além de poder até mesmo puxar e modificar coisa do próprio HTML e do CSS, pois além de fazer mostrar mensagens por ele eu consegui também fazer com que ele mostrasse imagens e mudasse as cores do fundo.
