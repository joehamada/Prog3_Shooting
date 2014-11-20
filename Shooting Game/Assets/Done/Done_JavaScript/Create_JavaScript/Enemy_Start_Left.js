#pragma strict

var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 180 == 0)
  {
    Instantiate(Enemy , Vector3(13 , Random.Range(23.0 , -23.0) ,10) , transform.rotation) ;
  }
}
