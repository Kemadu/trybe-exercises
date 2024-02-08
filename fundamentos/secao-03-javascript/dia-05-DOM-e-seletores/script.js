// 1 
const title = document.getElementById('page-title');

title.innerText = 'John Wick';

// 2
const firstParagraph = document.getElementById('first-paragraph');

firstParagraph.innerText = 'John Wick é um lendário assassino de aluguel aposentado, lidando com o luto após perder o grande amor de sua vida. Quando um gângster invade sua casa, mata seu cachorro e rouba seu carro, ele é forçado a voltar à ativa e inicia sua vingança.';

// 3
const subtitle = document.getElementById('subtitle');

subtitle.innerText = 'Principais Informações';

// 4
const paragraphs = document.getElementsByClassName('paragraph-style');
const fParagraph = paragraphs[0].style.fontStyle = 'italic';
// fParagraph.style.fontStyle = 'italic';

// 5 
const secondParagraph = document.getElementById('second-paragraph')
secondParagraph.innerText = `Direção: David Leitch, Chad Stahelski 
Roteirista: Derek Kolstad 
Atores: Keanu Reeves, Michael Nyqvist, Alfie Allen`

// 6
const subtitles = document.getElementsByTagName('h2')
const subtitleColor = subtitles[0].style.color = 'green';
// subtitleColor.style.color = 'green'