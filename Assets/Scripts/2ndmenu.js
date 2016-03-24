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
  GUI.skin.button.fontSize=Screen.width/30;
     GUI.backgroundColor=Color.black;

    // Make a background box
    GUI.Box (Rect (Screen.width/4,Screen.height/4,Screen.width/2,Screen.height/2), "<color=orange><b>ARITHMETIC</b></color>");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect ((Screen.width/5)+(Screen.width/8),(Screen.height/4)+(2.5*Screen.width/16),Screen.width/3,Screen.height/15),"<color=white>ADDITION</color>")) {
       PlayerPrefs.SetInt("level",1);
       Debug.Log(PlayerPrefs.GetInt("level",0));
          Application.LoadLevel (2);
    }

    // Make the second button.
    if (GUI.Button (Rect ((Screen.width/5)+(Screen.width/8),(Screen.height/4)+(5*Screen.width/16),Screen.width/3,Screen.height/15), "<color=white>SUBTRACTION</color>")) {
       PlayerPrefs.SetInt("level",2);
         Application.LoadLevel (2);
    }
  
    // Make the second button.
    if (GUI.Button (Rect ((Screen.width/5)+(Screen.width/8),(Screen.height/4)+(7.5*(Screen.width/16)),(Screen.width/3),(Screen.height/15)), "<color=white>MULTIPLICATION</color>")) {
          PlayerPrefs.SetInt("level",3);
         Application.LoadLevel (2);
    }
      // Make the second button.
    if (GUI.Button (Rect ((Screen.width/5)+(Screen.width/8),(Screen.height/4)+(10*(Screen.width/16)),(Screen.width/3),(Screen.height/15)), "<color=white>DIVISION</color>")) {
          PlayerPrefs.SetInt("level",4);
         Application.LoadLevel (2);
    }
  
}