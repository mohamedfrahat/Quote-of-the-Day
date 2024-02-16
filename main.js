
var random=0;
var repeat=-1;
var quota =[`<p>“Be yourself; everyone else is already taken.”</p><p>― Oscar Wilde</p>`
,`<p>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p><p>― Marilyn Monroe</p>`,
`<p>“So many books, so little time.</p><p>Frank Zappa</p>`,
`<p>“A room without books is like a body without a soul.”</p><p>― Marcus Tullius Cicero</p>`,
`<p>“You only live once, but if you do it right, once is enough.”</p><p>― Mae West</p>`,
`<p>“Be the change that you wish to see in the world.”</p><p>― Mahatma Gandhi</p>`,
`<p>“Without music, life would be a mistake.”</p><p>― Friedrich Nietzsche, Twilight of the Idols</p>`,
`<p>“If you tell the truth, you don't have to remember anything.””</p><p>― Mark Twain</p>`,
`<p>“We accept the love we think we deserve.”</p><p>― Stephen Chbosky,</p>`,
`<p>“Always forgive your enemies; nothing annoys them so much.”</p><p>― Oscar Wilde</p>`

]

function show() {
  random =Math.random()*10;

  random=Math.trunc(random);

while(random==repeat)
{random =Math.random()*10;

  random=Math.trunc(random);}
  document.getElementById('demo').innerHTML=quota[random];
  
  repeat=random;


}