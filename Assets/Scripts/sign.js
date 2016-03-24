#pragma strict

function Start () {
switch(PlayerPrefs.GetInt("level",0))
{case 1 :GetComponent.<UI.Text>().text = "+";
break;
case 2 :GetComponent.<UI.Text>().text = "-";
break;
case 3 :GetComponent.<UI.Text>().text = "*";
break;
case 4 :GetComponent.<UI.Text>().text = "/";
break;

}
}
