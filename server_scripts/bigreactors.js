// priority: 0

onEvent("recipes", (event) => {
  event.replaceInput(
    { mod: "bigreactors" },
    "minecraft:iron_ingot",
    "pneumaticcraft:ingot_iron_compressed"
  );
  event.replaceInput(
    { mod: "bigreactors" },
    "minecraft:iron_block",
    "pneumaticcraft:compressed_iron_block"
  );
  event.replaceInput(
    { mod: "bigreactors" },
    "bigreactors:graphite_ingot",
    "immersiveengineering:ingot_hop_graphite"
  );

  event.remove({ output: "bigreactors:graphite_ingot" });
  event.remove({ output: "bigreactors:graphite_dust" });
});
