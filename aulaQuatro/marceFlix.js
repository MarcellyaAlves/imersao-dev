var listaFilmes = [
"https://upload.wikimedia.org/wikipedia/pt/1/1b/Batman_begins.jpg", "https://legadodamarvel.com.br/wp-content/uploads/2022/11/poster-fa-vingadores-5-legadodamarvel.webp", "https://m.media-amazon.com/images/I/81IOBRQor2L.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/14/11/14/13/47/211678.jpg"
 ]

var nomeFilmes = ['Batman Begins', 'Os Vigadores', 'Crepúsculo', "Harry Potter", "50 tons de cinza"];

for (var i=0; i< listaFilmes.length; i++) {
    document.write('<p class="nomeDaClasse">'+ nomeFilmes[i] +'</p>' + '<img src=' + listaFilmes[i] + '>') }