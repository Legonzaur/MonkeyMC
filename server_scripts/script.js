// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

onEvent("recipes", (event) => {
  //Teleport
  event.remove({ output: "travel_anchors:travel_anchor" });
  event.remove({ output: "travel_anchors:travel_staff" });
  event.shapeless("travel_anchors:travel_staff", ["reliquary:ender_staff"]);
  event.shapeless("reliquary:ender_staff", ["travel_anchors:travel_staff"]);
  event.shaped("travel_anchors:travel_anchor", ["AIA", "ICI", "AIA"], {
    I: "botania:elementium_ingot",
    A: "minecraft:respawn_anchor",
    C: "create:refined_radiance_casing",
  });

  //CableTiers
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
    Fluid.of("pneumaticcraft:lubricant", 250),
  ]);
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
