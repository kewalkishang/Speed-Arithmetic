#pragma strict
static var a : int;
function Start () {
a=Random.Range(1,9);
if(PlayerPrefs.GetInt("level",0)==4)
a=righta.b*Random.Range(0,10);
GetComponent.<UI.Text>().text=a.ToString();
}

