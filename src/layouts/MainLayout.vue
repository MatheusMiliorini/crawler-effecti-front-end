<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Licitações Effecti
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: 'MainLayout',
  components: {

  },
  data () {
    return {

    }
  }
})
</script>
