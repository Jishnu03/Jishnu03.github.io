function submitForm(formElement)
{
    // console.log(formElement.elements[0].value);
    // console.log(formElement.elements[1].value);
    // console.log(formElement.elements[2].value);
    var hobbies=[];
    var len=formElement.elements.length;
    for(var i=0;i<len;i++)
    {
        var element=formElement.elements[i];
        if(element.type!='submit' && element.type!='button')
        {
            if( (element.type=='radio') && !element.checked)
            {   
                continue;
            }
            else if(element.name=='hobby'&& element.type=='checkbox')
            {
             if(element.checked) 
              hobbies.push(element.value);    
             continue; 
            }
            else{
                console.log('NAME : '+element.name+'VALUE : '+element.value);
            }
        }
    }
    console.log('hobbies : '+hobbies);
}