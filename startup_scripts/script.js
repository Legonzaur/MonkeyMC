// priority: 0

console.info(
  "Hello, World! (You will only see this line once in console, during startup)"
);

console.log("Hiding items in JEI, pre-event");

onEvent("jei.hide.items", (event) => {
  console.log("Hiding items in JEI");
  // event.hide('/\\w+:\\w+_spawn_egg/');
  // event.hide('/minecraft:lingering_potion/');
  // event.hide('/minecraft:splash_potion/');
});

onEvent("jei.add.items", (event) => {
  //event.add(Item.of("kubejs:elite_exporter_unprocessed", {}));
  // event.add(Item.of("kubejs:elite_importer_unprocessed", {}));
});

onEvent("item.registry", (event) => {
  // CableTiers
  // event.create('example_item').displayName('Example Item')
});

onEvent("block.registry", (event) => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
