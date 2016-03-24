#pragma strict

static var b : int;
function Start () {
b=Random.Range(1,9);
GetComponent.<UI.Text>().text=b.ToString();
}