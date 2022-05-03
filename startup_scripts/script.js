// priority: 0

console.info(
  "Hello, World! (You will only see this line once in console, during startup)"
);

console.log("Hiding items in JEI, pre-event");

events.listen("jei.hide.items", (event) => {
  console.log("Hiding items in JEI");
  // event.hide('/\\w+:\\w+_spawn_egg/');
  // event.hide('/minecraft:lingering_potion/');
  // event.hide('/minecraft:splash_potion/');
  event.hide("cabletiers:creative_exporter");
  event.hide("cabletiers:creative_importer");
  event.hide("cabletiers:creative_constructor");
  event.hide("cabletiers:creative_destructor");
  event.hide("cabletiers:creative_disk_manipulator");
  event.hide("cabletiers:creative_requester");
});

onEvent("item.registry", (event) => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
});

onEvent("block.registry", (event) => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
