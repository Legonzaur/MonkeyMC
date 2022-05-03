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
    A: "kubejs:lubrified_advanced_processor",
    I: "refinedstorage:exporter",
  });
  event.shaped("cabletiers:elite_importer", [" A ", "AIA", " A "], {
    A: "kubejs:lubrified_advanced_processor",
    I: "refinedstorage:importer",
  });
  event.shaped("cabletiers:elite_constructor", [" A ", "AIA", " A "], {
    A: "kubejs:lubrified_advanced_processor",
    I: "refinedstorage:constructor",
  });
  event.shaped("cabletiers:elite_destructor", [" A ", "AIA", " A "], {
    A: "kubejs:lubrified_advanced_processor",
    I: "refinedstorage:destructor",
  });
  event.shaped("cabletiers:elite_disk_manipulator", [" A ", "AIA", " A "], {
    A: "kubejs:lubrified_advanced_processor",
    I: "refinedstorage:disk_manipulator",
  });
  event.shaped("cabletiers:elite_requester", [" A ", "AIA", " A "], {
    A: "kubejs:lubrified_advanced_processor",
    I: "rsrequestify:requester",
  });
  event.recipes.createFilling("kubejs:lubrified_advanced_processor", [
    "refinedstorage:advanced_processor",
    Fluid.of("kubejs:conductive_fluid", 250),
  ]);
  event.recipes
    .createMixing(Fluid.of("kubejs:conductive_fluid", 500), [
      "minecraft:blue_ice",
      Fluid.of("pneumaticcraft:lubricant", 500),
    ])
    .heated();
  event.recipes
    .createMixing(Fluid.of("kubejs:supraconductive_fluid", 500), [
      "minecraft:blue_ice",
      Fluid.of("pneumaticcraft:lubricant", 500),
    ])
    .superheated();
});
