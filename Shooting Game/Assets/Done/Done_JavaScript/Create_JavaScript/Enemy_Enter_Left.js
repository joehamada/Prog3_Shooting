#pragma strict

function Update () {

  transform.position.x -= 0.1 ;

  if(transform.position.x < -11.5)
  {
    Destroy(gameObject) ;
  }


}
