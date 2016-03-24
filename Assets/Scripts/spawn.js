#pragma strict
public var positions : Vector3[] ;
var answer : GameObject;
var wrong1 : GameObject;
var wrong2 : GameObject;
var wrong3 : GameObject;
var i : int ;
function Start () {
Instantiate(answer,positions[Random.Range(0,positions.Length)], transform.rotation);
	    Instantiate(wrong2,positions[Random.Range(0,positions.Length)], transform.rotation);
	 
      Instantiate(wrong1,positions[Random.Range(0,positions.Length)], transform.rotation);
	   
	  
	 
 	   Instantiate(wrong3,positions[Random.Range(0,positions.Length)], transform.rotation);

}

