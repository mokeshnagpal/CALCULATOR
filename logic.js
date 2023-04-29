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
  if(c==="Backspace"||c==="Delete"||c==='b')
		del();
	else if(c==="Esc"||c==='c')
		ac();
	else if(c=='+'||c==='.'||c==='-'||c==='*'||c==='\\'||c==='%'||c==='&')
	{
		document.getElementById('out').value+=c;
		na();
	}
	else if(Number(c)>=0&&Number(c)<=9)
	{
		document.getElementById('out').value+=c;
	}
  else if(c==="Enter"||c==='=')
	{
		document.getElementById('out').value=eval(document.getElementById('out').value);
	}
}