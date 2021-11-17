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

for (let i = 0; i < moin.length; i++) {
    moin[i].addEventListener('click',

        function Moin() {
            if (moin[i].nextElementSibling.innerHTML > 1) {
                moin[i].nextElementSibling.innerHTML--;


                var x = prix_unitaire[i].innerHTML;
                console.log(x)
                var y = sous_total[i].innerHTML;
                console.log(y)
                y = Number(x) * plus[i].nextElementSibling.innerHTML;
                console.log(y)
                sous_total[i].innerHTML = y;

                Total()
            }

        }
    )
}

/*
function Plus2() {
    var plus = document.getElementsByClassName("plus2");
    console.log(plus);
    for (var c = 0; c < plus.length; c++) {


        if (plus[c].previousElementSibling.innerHTML < 10)
            plus[c].previousElementSibling.innerHTML++;
        var x = Number(document.getElementById('puu').value);
        console.log(x);
        var y = Number(document.getElementById('soustt').value);
        y = x * plus[c].previousElementSibling.innerHTML;
        console.log(y);
        document.getElementById('soustt').value = y;

        document.getElementById('total').value = Number(document.getElementById('soustt').value) + Number(document.getElementById('soust').value);
        document.getElementById('nb_art').value = Number(document.getElementById('span').value) + Number(document.getElementById('span2').value);

    }
}

function Moin2() {
    var moin = document.getElementsByClassName("moin2");
    console.log(moin);
    for (var c = 0; c < moin.length; c++) {

        if (moin[c].nextElementSibling.innerHTML > 1)
            moin[c].nextElementSibling.innerHTML--;
        var x = Number(document.getElementById('puu').value);
        console.log(x);
        var y = Number(document.getElementById('soustt').value);
        y = x * moin[c].nextElementSibling.innerHTML;
        console.log(y);
        document.getElementById('soustt').value = y;
        document.getElementById('total').value = Number(document.getElementById('soustt').value) + Number(document.getElementById('soust').value);

        document.getElementById('nb_art').value = Number(document.getElementById('span').value) + Number(document.getElementById('span2').value);
    }


}
*/


function myFunction() {
    var myobj = document.getElementById("achat");
    myobj.remove();

    document.getElementById('nb_art').value = Number(document.getElementById('span').value);
    Total()

}



function Adore() {
    if (document.getElementById("adore").style.color == "rgb(72, 61, 133)") {
        document.getElementById("adore").style.color = "red";
    } else {
        document.getElementById("adore").style.color = "rgb(72, 61, 133)";
    }

}