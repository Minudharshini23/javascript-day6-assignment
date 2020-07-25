let no_of_colo_change=prompt("enter the number of colours:");
let color_arr=[];
for(let i=0;i<no_of_colo_change;i++)
{
    let value=prompt("enter the desired colour:");
    color_arr.push(value);
    // setInterval(change,5000);
function change()
{
 document.body.style.backgroundColor=color_arr[i];
console.log(color_arr[i]);
}
setInterval(change,5000);
}

