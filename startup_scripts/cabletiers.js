// priority: 0

onEvent("item.registry", (event) => {
  // CableTiers
  event
    .create("watercooled_advanced_processor")
    .displayName("Watercooled Processor")
    .color(1, "FFAA00");
  event
    .create("supercooled_advanced_processor")
    .displayName("Supercooled Processor");
  event.create("silverfish_guts").displayName("Sulverfish Guts");
});

onEvent("jei.hide.items", (event) => {
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

onEvent("fluid.registry", (event) => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create("coolant_fluid").displayName("Coolant Fluid");
});

onEvent("fluid.registry", (event) => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create("bacteria_fluid").displayName("Bacteria Mixture");
});

onEvent("fluid.registry", (event) => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create("glycol_ethylene_fluid").displayName("Ethlyene Glycol");
});

onEvent("fluid.registry", (event) => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create("supercoolant_fluid").displayName("Supercoolant Fluid");
});
