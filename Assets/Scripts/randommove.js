#pragma strict
import UnityEngine.Transform;
var ran: float;
var rana: float;
var rb: Rigidbody2D;
public var speed :float;

function Start () {
speed = 5;
rb = GetComponent.<Rigidbody2D>();
var movement =Vector2(Random.Range(-20,20),Random.Range(-20,20));
//rb.AddForce (movement * speed);
 rb.AddForce(movement * speed);

}

