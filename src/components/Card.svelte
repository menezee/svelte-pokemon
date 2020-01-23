<script>
  export let name;
  export let image;
</script>

<div class="card" style={`background-image: url(${image})`}>
  {name}
</div>

<style>
  .card {
    border: 1px solid black;
    height: 150px;
    width: 200px;
    margin: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
