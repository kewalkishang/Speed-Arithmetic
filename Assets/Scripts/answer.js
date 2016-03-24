#pragma strict
static var c : int;
  var l : int;
  var dsa : int;
  
function Start () { 
  l = righta.b;
   dsa = lefta.a;
   switch(PlayerPrefs.GetInt("level",0))
 {
 case 1:c=l+dsa;
       GetComponent.<TextMesh>().text = c.ToString();
        break;
 case 2:
 c=dsa - l;
 GetComponent.<TextMesh>().text = c.ToString();
 break;
 case 3:
 c=dsa*l;
 GetComponent.<TextMesh>().text = c.ToString();
 break;
case 4:
  c=parseFloat(dsa)/parseFloat(l);
 GetComponent.<TextMesh>().text = c.ToString();
 break;
 }
}
