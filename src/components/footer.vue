<template>
  <div id="footer" >

    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item image is-64x64">
          <img src="" alt="img">
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <p class="navbar-item ">
            <small>Employee management system</small>
          </p> 
        </div>
        <hr>
        <div class="navbar-end">
          <div class="navbar-item">
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Vimal Raj M
            </div>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <div> 
                  <span class="icon is-small">
                      <i class="fa fa-user-circle-o "></i>
                  </span>
                  Profile
                </div>
              </a>
              <a class="navbar-item">
                <div> 
                  <span class="icon is-small">
                    <i class="fa fa-bug"></i>
                  </span>
                  Report Bug
                </div>
              </a>
              <a class="navbar-item">
                <div> 
                  <span class="icon is-small">
                      <i class="fa fa-sign-out "></i>
                  </span>
                  Sign Out
                </div>
              </a>
          </div>
        </div>
      </div>
      </div>
    </nav>
</div>

</template>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<script>

export default {
  name: 'footer',
  components: {
  }
}
</script>

<style>

*{transition:all 0.3s ease-in-out;}

.container{
  clear:both;
  overflow:auto;
}

nav{float:right;}

.logo img{float:left;}

ul li{
  display: inline-block; padding:10px;
  font-size:20px; font-family:raleway;
}

ul li:hover{
  color:orange;
  
}

</style>