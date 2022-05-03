// priority: 0

onEvent("item.registry", (event) => {
  // CableTiers
  event
    .create("lubrified_advanced_processor")
    .displayName("Lubrified Advanced Processor")
    .color(1, "FFAA00");
  event.create("ultimate_processor").displayName("Supercooled Processor");
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
  event
    .create("conductive_fluid")
    .textureThick(0xf2d98d)
    .bucketColor(0xf2d98d)
    .displayName("Conductive Fluid");

  event
    .create("supraconductive_fluid")
    .textureThick(0xf2d98d)
    .bucketColor(0xf2d98d)
    .displayName("Supraconductive Fluid");
});
