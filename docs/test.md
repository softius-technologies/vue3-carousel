# Test

## Basic

<ExampleBasic />

## Wrap Around

<ExampleWrapAround />

## Breakpoints

<ExampleBreakpoints />

## Autoplay

<ExampleAutoplay />

## Active Classes

<ExampleActiveClasses />

## Custom Navigation

<ExampleCustomNavigation />

## Gallery

<ExampleGallery />

<script>
import ExampleBasic from './examples/ExampleBasic.vue';
import ExampleWrapAround from './examples/ExampleWrapAround.vue';
import ExampleBreakpoints from './examples/ExampleBreakpoints.vue';
import ExampleAutoplay from './examples/ExampleAutoplay.vue';
import ExampleActiveClasses from './examples/ExampleActiveClasses.vue';
import ExampleCustomNavigation from './examples/ExampleCustomNavigation.vue';
import ExampleGallery from './examples/ExampleGallery.vue';

export default {
  components: {
    ExampleBasic,
    ExampleWrapAround,
    ExampleBreakpoints,
    ExampleAutoplay,
    ExampleActiveClasses,
    ExampleCustomNavigation,
    ExampleGallery,
  }
}
</script>

<style>
:root {
  --brand-color: #535bf2;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--brand-color);
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vp-doc li {
  list-style: none;
}
.vp-doc li + li,
.vp-doc ol {
  margin: 0;
}

.carousel__pagination {
  margin: 10px 0 0 !important;
}
</style>