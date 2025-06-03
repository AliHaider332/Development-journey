let item=0;
let fullString;
function changeValue(a){
    if(a==='first')
    {
        item++;
    }
    else if(a==='second')
    {
        item+=2;
    }
    else {
        if(item>0)
        {
            item--;
        }
        else
        {
            item=0;
        }
    }
    add();

}
function add() {
    fullString=`Total items in your bag are ${item}`;
    document.querySelector('h1').textContent = fullString;
}
