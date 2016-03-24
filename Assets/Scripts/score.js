#pragma strict

function Start () {
Screen.orientation = ScreenOrientation.Portrait;
}

function Update () {
if (Input.GetKeyDown(KeyCode.Escape)) 
  {  PlayerPrefs.SetInt("score",0);
  Application.LoadLevel(0); 
}
}
function OnGUI () {

 GUI.skin.box.fontSize=Screen.width/20;
  GUI.skin.label.fontSize=Screen.width/20;
     GUI.backgroundColor=Color.red;

    // Make a background box
    GUI.Box (Rect (Screen.width/4,Screen.height/4,Screen.width/2,Screen.height/2.5), "<color=orange>ANSWER STREAK</color>");
  GUI.Label(Rect ( Screen.width/4+100,Screen.height/4+200,Screen.width/2,Screen.height/2.5),"Addition -"+PlayerPrefs.GetInt("HIGHA",0));
 GUI.Label(Rect ( Screen.width/4+100,Screen.height/4+400,Screen.width/2,Screen.height/2.5),"Subtraction -"+PlayerPrefs.GetInt("HIGHS",0));
  GUI.Label(Rect ( Screen.width/4+100,Screen.height/4+600,Screen.width/2,Screen.height/2.5),"Multiplication -"+PlayerPrefs.GetInt("HIGHM",0));
   GUI.Label(Rect ( Screen.width/4+100,Screen.height/4+800,Screen.width/2,Screen.height/2.5),"Division -"+PlayerPrefs.GetInt("HIGHD",0));
  
}