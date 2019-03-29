<template>
  <div id="app">
    <header>
      <nav class="navbar titlebar">
       <router-link class="btn-route navbar-brand" to="/" exact>Software Defect Tracker</router-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="btn-route nav-link" to="/add-defect" exact>Add Defect</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  background-image: linear-gradient(#c3dad0, #649d83);
  background-attachment: fixed;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.data-section {
  margin: 50px;
  padding: 0px;
  text-align: left;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  background-color: white;
  border-radius: 5px;
  color: #2f316c;
}

.data-section-header {
  background-color: #3e6179;
  color: #bfccd5;
  margin: 0px;
  padding: 5px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.data-section-contents {
  padding: 15px;
}

.btn-route {
  color: inherit;
}

.titlebar {
  background-color: #607D92;
  color: #BFCCD5
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
}

.nav-link {
  text-decoration: none;
  color:inherit;
}

.nav-link:hover {
  color: #264a64
}

.navbar-brand:hover {
  color: #264a64
}
.router-link-active {
  color: white;
}
</style>
