#pragma strict

function Update () {

  transform.position.z -= 0.1 ;

  if(transform.position.z < -14.0)
  {
    Destroy(gameObject) ;
  }


}
