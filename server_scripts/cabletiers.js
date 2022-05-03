// priority: 0
onEvent("entity.loot_tables", (event) => {
  // Override zombie loot table that will drop 5 of either carrot (25% chance) or apple (75% chance)
  event.addEntity("minecraft:silverfish", (table) => {
    table.addPool((pool) => {
      pool.addItem("kubejs:silverfish_guts");
    });
  });
});

onEvent("recipes", (event) => {
  //creative
  event.remove({ output: "cabletiers:creative_exporter" });
  event.remove({ output: "cabletiers:creative_importer" });
  event.remove({ output: "cabletiers:creative_constructor" });
  event.remove({ output: "cabletiers:creative_destructor" });
  event.remove({ output: "cabletiers:creative_disk_manipulator" });
  event.remove({ output: "cabletiers:creative_requester" });
  //Elite
  event.remove({ output: "cabletiers:elite_exporter" });
  event.remove({ output: "cabletiers:elite_importer" });
  event.remove({ output: "cabletiers:elite_constructor" });
  event.remove({ output: "cabletiers:elite_destructor" });
  event.remove({ output: "cabletiers:elite_disk_manipulator" });
  event.remove({ output: "cabletiers:elite_requester" });
  event.shaped("cabletiers:elite_exporter", [" A ", "AIA", " A "], {
    A: "kubejs:watercooled_advanced_processor",
    I: "refinedstorage:exporter",
  });
  event.shaped("cabletiers:elite_importer", [" A ", "AIA", " A "], {
    A: "kubejs:watercooled_advanced_processor",
    I: "refinedstorage:importer",
  });
  event.shaped("cabletiers:elite_constructor", [" A ", "AIA", " A "], {
    A: "kubejs:watercooled_advanced_processor",
    I: "refinedstorage:constructor",
  });
  event.shaped("cabletiers:elite_destructor", [" A ", "AIA", " A "], {
    A: "kubejs:watercooled_advanced_processor",
    I: "refinedstorage:destructor",
  });
  event.shaped("cabletiers:elite_disk_manipulator", [" A ", "AIA", " A "], {
    A: "kubejs:watercooled_advanced_processor",
    I: "refinedstorage:disk_manipulator",
  });
  event.shaped("cabletiers:elite_requester", [" A ", "AIA", " A "], {
    A: "kubejs:watercooled_advanced_processor",
    I: "rsrequestify:requester",
  });
  event.recipes.createFilling("kubejs:watercooled_advanced_processor", [
    "refinedstorage:advanced_processor",
    Fluid.of("kubejs:coolant_fluid", 250),
  ]);
  event.recipes
    .createMixing(Fluid.of("kubejs:coolant_fluid", 500), [
      "minecraft:blue_ice",
      Fluid.of("pneumaticcraft:lubricant", 500),
    ])
    .heated();
  //Ultimate
  event.remove({ output: "cabletiers:ultra_exporter" });
  event.remove({ output: "cabletiers:ultra_importer" });
  event.remove({ output: "cabletiers:ultra_constructor" });
  event.remove({ output: "cabletiers:ultra_destructor" });
  event.remove({ output: "cabletiers:ultra_disk_manipulator" });
  event.remove({ output: "cabletiers:ultra_requester" });
  event.shaped("cabletiers:ultra_exporter", [" A ", "AIA", " A "], {
    A: "kubejs:supercooled_advanced_processor",
    I: "cabletiers:elite_exporter",
  });
  event.shaped("cabletiers:ultra_importer", [" A ", "AIA", " A "], {
    A: "kubejs:supercooled_advanced_processor",
    I: "cabletiers:elite_importer",
  });
  event.shaped("cabletiers:ultra_constructor", [" A ", "AIA", " A "], {
    A: "kubejs:supercooled_advanced_processor",
    I: "cabletiers:elite_constructor",
  });
  event.shaped("cabletiers:ultra_destructor", [" A ", "AIA", " A "], {
    A: "kubejs:supercooled_advanced_processor",
    I: "cabletiers:elite_destructor",
  });
  event.shaped("cabletiers:ultra_disk_manipulator", [" A ", "AIA", " A "], {
    A: "kubejs:supercooled_advanced_processor",
    I: "cabletiers:elite_disk_manipulator",
  });
  event.shaped("cabletiers:ultra_requester", [" A ", "AIA", " A "], {
    A: "kubejs:supercooled_advanced_processor",
    I: "cabletiers:elite_requester",
  });
  event.recipes.createFilling("kubejs:supercooled_advanced_processor", [
    "kubejs:watercooled_advanced_processor",
    Fluid.of("kubejs:supercoolant_fluid", 250),
  ]);

  event.recipes.createMixing(Fluid.of("kubejs:bacteria_fluid", 50), [
    "kubejs:silverfish_guts",
    Fluid.of("minecraft:water", 50),
  ]);

  event.recipes
    .createMixing(Fluid.of("kubejs:glycol_ethylene_fluid", 1000), [
      Fluid.of("kubejs:bacteria_fluid", 50),
      Fluid.of("pneumaticcraft:plastic", 950),
    ])
    .heated();
  event.recipes.createMixing(Fluid.of("kubejs:supercoolant_fluid", 500), [
    Fluid.of("kubejs:glycol_ethylene_fluid", 100),
    Fluid.of("kubejs:coolant_fluid", 400),
  ]);
});
