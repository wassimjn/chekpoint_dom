var plus = document.querySelectorAll(".plus");
var moin = document.querySelectorAll(".moin");
var prix_unitaire = document.querySelectorAll('.pu');
var sous_total = document.querySelectorAll('.soust');
var total = document.querySelector('.total');
var nbr_article = document.querySelector('#nb_art');
var span = document.querySelectorAll('.span');
Total()
console.log(span[0].innerHTML)
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click',
        function Plus() {
            if (plus[i].previousElementSibling.innerHTML < 10) {
                plus[i].previousElementSibling.innerHTML++;


                var x = prix_unitaire[i].innerHTML;
                console.log(x)
                var y = sous_total[i].innerHTML;
                console.log(y)
                y = Number(x) * plus[i].previousElementSibling.innerHTML;
                console.log(y)
                sous_total[i].innerHTML = y;

                Total()

            }

        }

    )
}



for (let i = 0; i < moin.length; i++) {
    moin[i].addEventListener('click',

        function Moin() {
            if (moin[i].nextElementSibling.innerHTML > 1) {
                moin[i].nextElementSibling.innerHTML--;


                var x = prix_unitaire[i].innerHTML;
                console.log(x)
                var y = sous_total[i].innerHTML;
                console.log(y)
                y = Number(x) * moin[i].nextElementSibling.innerHTML;
                console.log(y)
                sous_total[i].innerHTML = y;

                Total()
            }

        }
    )
}



var myobj = document.querySelectorAll(".art");
var supp = document.querySelectorAll('#suppbtn')


for (let i = 0; i < supp.length; i++) {

    supp[i].addEventListener('click', function() {
        myobj[i].remove()
        Total()
    })




}




function Adore() {
    if (document.querySelectorAll(".adore").style.color == "rgb(72, 61, 133)") {
        document.querySelectorAll(".adore").style.color = "red";
    } else {
        document.querySelectorAll(".adore").style.color = "rgb(72, 61, 133)";
    }

}

function Total() {
    var sum = 0
    var res = 0
    for (let i = 0; i < sous_total.length; i++) {
        sum = sum + Number(sous_total[i].innerHTML)
        res = res + Number(span[i].innerHTML)

    }
    total.innerHTML = sum
    nbr_article.innerHTML = res
}