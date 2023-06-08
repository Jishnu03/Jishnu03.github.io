// for(var i=1;i<=10;i++)
// {
//     console.log(i);
//     if(i%4==0)
//       break;
// }

// for(var i=1;i<=10;i++)
// {
//     if(i%4==0)
//     continue;
//     console.log(i);
// }

for(var i=2;i<=10;i=i+2)
{
    console.log(i);
    if(i%4==0)
        break;
    else
        continue;
}