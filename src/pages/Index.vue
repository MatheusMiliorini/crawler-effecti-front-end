<template>
  <q-page class="row">
    <div class="col-12 col-md-6 offset-md-3 q-mt-sm">

      <q-input outlined v-model="filtro" label="Buscar Descrição" />

      <q-list clickable padding>
        <q-item v-for="lic in licitacoesFiltradas" :key="lic.id" tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="lic.checked" />
          </q-item-section>

          <q-item-section>
            <q-item-label :class="lic.checked ? 'lt text-grey-5' : ''">{{ lic.id }}</q-item-label>
            <q-item-label caption :class="lic.checked ? 'lt text-grey-4' : ''">
              {{ lic.descricao }}
            </q-item-label>
            <q-item-label caption :class="lic.checked ? 'lt text-grey-4' : ''">
              {{ lic.data }}
            </q-item-label>
            <q-item-label caption>
              <a target="_blank" :href="lic.linkDocumentos">Acessar Documentos</a>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">

import Vue from 'vue'
import axios from 'axios'
import Licitacao from '../classes/Licitacao'

export default Vue.extend({
  name: 'PageIndex',
  components: {},
  async mounted () {
    this.licitacoes = await this.getLicitacoes()
  },
  data () {
    return {
      licitacoes: new Array<Licitacao>(0),
      filtro: ''
    }
  },
  computed: {
    licitacoesFiltradas () : Array<Licitacao> {
      return this.licitacoes.filter(l => l.descricao.toLowerCase().includes(this.filtro.toLowerCase()))
    }
  },
  methods: {
    async getLicitacoes () : Promise<Array<Licitacao>> {
      const { data } = await axios.get<Array<Licitacao>>(`${process.env.API || ''}/licitacoes`)
      return data.map(l => {
        l.checked = false
        return l
      })
    }
  }
})
</script>

<style lang="sass" scoped>
  .lt
    text-decoration: line-through
</style>
