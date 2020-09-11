<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>UFO Finder</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"> -->
  <link rel="stylesheet" href="UFO-level-1/static/css/style.css">

  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.0/math.min.js"></script>

 




</head>

<body style="background-color: black;">
  <div >
    <nav class="navbar navbar-default" style="background-color: black;">
      <div class="container-fluid" >
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">UFO Sightings
            <img class="nav-ufo" src="UFO-level-1/static/images/ufo.svg">
          </a>
        </div>
      </div>
    </nav>
    <div class="hero text-center">
      <h1>UFO Sightings</h1>
      <p>The Truth is Out There</p>
    </div>
  </div>
<div class="container"></div>
<div class="row">
    <div class="container col-md-4" >
        <button id="level1" type="button" class="btn btn-secondary" onclick="location.href='UFO-level-1/index.html'" style="padding: 15px 40%" >Level 1</button>
    </div>
    <div class="container col-md-4">
      <button id="level2" type="button" class="btn btn-secondary" onclick="location.href='UFO-level-2/index.html'" style="padding: 15px 40%" >Level 2</button>
    </div>    <div class="container col-md-4">
      <button id="level3" type="button" class="btn btn-secondary" onclick="location.href='UFO-level-3/index.html'" style="padding: 15px 40%" >Level 3</button>
    </div>

</div>
</div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>

</body>
</html>