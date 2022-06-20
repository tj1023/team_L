const pn = ['      ', ' ', ' ', '여','행',' ', '지','역','을', ' ', '선', '택', '하','세','요'];
let txtBox = ('#textBox2 > h2');

$(document).ready(function(){
        var txt = '';
        pn.forEach(function(e, i){
            function ani() {
                console.log(e, i)
                setTimeout(function() {
                    txt += e;
                    console.log(txt)
                    txtBox.text(txt)
                }, i*150);
            }
            ani();
        });
    })
