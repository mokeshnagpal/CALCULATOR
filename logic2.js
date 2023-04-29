function na()
{
	let b=document.getElementById("out").value;
	let a=b[b.length-1];
	if(b.length==1&&a!='-'&&a!='+')
		document.getElementById("out").value="";
	else if(isNaN(Number(b[b.length-2])))
    {
        b=b.slice(0,-2);
        b=b+a;
        document.getElementById("out").value=b;
	}
}

function del()
{
	let d=document.getElementById("out").value;
	d=d.slice(0,-1);
    document.getElementById("out").value=d;
}
function ac()
{
	document.getElementById("out").value="";
	
}
function kp()
{
	let e=window.event;
	let c=e.key;
	let f=document.getElementById("bo");
	f.addEventListener('keyup', function(event) {
      const k = event.key;
      if (k === "Backspace"||k==="Delete")  {	
        del();
       document.write(k);
      }
      else if(k==="Esc"){
      	ac();
      }
      else if(k==="Enter"|| k==='=')
      {
      	document.getElementById('out').value=eval(document.getElementById('out').value);
      }
     
    });
    f.removeEventListener('keyup',event);
	if(c=='+'||c==='.'||c==='-'||c==='*'||c==='\\'||c==='%'||c==='&')
	{
		document.getElementById('out').value+=c;
		na();
	}
	else if(c==='c')
	{
		ac();
	}
	else if(Number(c)>=0&&Number(c)<=9)
	{
		document.getElementById('out').value+=c;
	}

}