#pragma strict
var hit : RaycastHit2D;
var ok : int;
var score : int;
var qu: int;
var time : int;
var timeLeft : float;
function Start () {
 timeLeft = 6.0f;
qu=0;
ok=0;

score = PlayerPrefs.GetInt("score",0);
score+=1;
PlayerPrefs.SetInt("score",score);
switch(PlayerPrefs.GetInt("level",0))
{case 1 : if(score>PlayerPrefs.GetInt("HIGHA",0))
        PlayerPrefs.SetInt("HIGHA",score);
        break;
 case 2 : if(score>PlayerPrefs.GetInt("HIGHS",0))
        PlayerPrefs.SetInt("HIGHS",score);
        break;
 case 3 : if(score>PlayerPrefs.GetInt("HIGHM",0))
        PlayerPrefs.SetInt("HIGHM",score);
        break;
 case 4 : if(score>PlayerPrefs.GetInt("HIGHD",0))
        PlayerPrefs.SetInt("HIGHD",score);
        break;
}
}
function Update () {
if (Input.GetKeyDown(KeyCode.Escape)) 
  {  PlayerPrefs.SetInt("score",0);
  Application.LoadLevel(1); 
}
timeLeft -= Time.deltaTime;
time=timeLeft;
     if ( timeLeft < 0 )
     {
        qu=1;
     }
if(Input.GetTouch(0).phase==TouchPhase.Began)
hit=Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position),Vector2.zero);
//hit=Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position),Vector2.zero);
if(hit.collider!=null && hit.transform.gameObject.tag=="CORRECT"){
hit.transform.gameObject.GetComponent.<Renderer>().material.color= Color.green;
ok=1;

}
else
if(hit.collider!=null && hit.transform.gameObject.tag=="WRONG"){
hit.transform.gameObject.GetComponent.<Renderer>().material.color= Color.red;
ok=2;
}


}
function OnGUI(){
if(ok==1)
{//GUI.Box(Rect(0,Screen.height/2,Screen.width,200),"CORRECT");

wait();
}
else 
if(ok==2)
{GUI.Box(Rect(0,Screen.height/2,Screen.width,200),"WRONG");
exitga();

}
else
if(qu==1)
{GUI.Box(Rect(0,Screen.height/2,Screen.width,200),"TIME UP");
exitga();
}GUI.Box(Rect(20,20,400,150),"score-"+(score-1));
if(time>=0)
GUI.Box(Rect(Screen.width-420,20,400,150),"time-"+time);
}
function wait()
{

yield WaitForSeconds(1);
Application.LoadLevel(2);
}
function exitga()
{
yield WaitForSeconds(1);
PlayerPrefs.SetInt("score",0);
Application.LoadLevel(1);
}