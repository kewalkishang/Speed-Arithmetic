#pragma strict

function Start () { 
var ca : int;
var ans : int; 
ca=answer.c;
ans= ca + Random.Range(1,6)+Random.Range(-1,-6);
if(ca == ans)
{var ran = Random.Range(1,5);
if(ran%2==0)
ans= ca + Random.Range(1,4);
else
ans =ca + Random.Range(-1,-4);
}
GetComponent.<TextMesh>().text = ans.ToString();


}