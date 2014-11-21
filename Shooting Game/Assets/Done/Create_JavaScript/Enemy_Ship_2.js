#pragma strict

var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 223 == 0)
  {
    Instantiate(Enemy , Vector3(Random.Range(23.0 , -23.0) , 20 ,13) , transform.rotation) ;
  }
}
