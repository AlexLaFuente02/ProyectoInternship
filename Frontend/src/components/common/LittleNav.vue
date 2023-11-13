<template>
      <nav>
        <template v-for="(item, key, index) in data" :key="index">
          <a :href="`#${key}`" :style="{ '--hue': `${item.hue}deg`, '--r': `${r}px`, '--t': `${t}s` }" class="item" @focus="onFocus" @mouseover="onHover">
            <span class="icon mono" :id="`blur${index}`" aria-hidden="true">{{ item.ico }}</span>
            <span class="icon mono" aria-hidden="true">{{ item.ico }}</span>
            <span class="icon midl" aria-hidden="true" :style="{ 'background-image': `-moz-element(#blur${index})` }">{{ item.ico }}</span>
            <span class="icon grey" aria-hidden="true">{{ item.ico }}</span>
            {{ key }}
          </a>
        </template>
      </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        r: 5,
        t: 0.3,
        data: {
            Pendiente: { ico: '🤷', hue: 60 },
            Todo: { ico: '🌎', hue: 180 },
            Aceptado: { ico: '👍', hue: 120 },
            Rechazado: { ico: '👎', hue: 0 },
        },
      };
    },
    methods: {
      onFocus() {
        // Handle focus event
      },
      onHover() {
        // Handle hover event
      },
    },
  };
  </script>
  
  <style scoped>
  body, nav, a {
    display: grid;
  }
  
  body {
    margin: 0;
    height: 100vh;
    background: #333;
  }
  
  nav {
    grid-auto-flow: column;
    place-self: center;
  }
  
  .item {
    --hl: 0;
    width: 5em;
    color: hsl(var(--hue), calc(var(--hl) * 100%), 65%);
    text-align: center;
    text-decoration: none;
    transition: color var(--t);
  
    &:focus {
      outline: none;
    }
  
    &:hover,
    &:focus {
      --hl: 1;
    }
  }
  
  .icon {
    grid-area: 1 / 1;
    place-self: center;
    font-size: 2.5em;
  }
  
  .mono {
    transform: translate(calc(var(--hl) * 0.375em), calc(var(--hl) * -0.25em)) rotate(calc(var(--hl) * 22.5deg));
    opacity: var(--hl);
    transition: 0.3s;
    &[id*='blur'] {
      position: fixed;
      bottom: 100vh;
    }
  }
  
  .midl {
    color: transparent;
    backdrop-filter: blur(var(--r));
    -webkit-mask: linear-gradient(red 0 0) text;
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    opacity: calc(var(--hl) * 0.5);
    transition: 0.3s;
    mask: linear-gradient(red 0 0) text;
  }
  
  .grey {
    filter: grayscale(1) opacity(0.35);
  }
  </style>
