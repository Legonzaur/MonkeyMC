// priority: 0

onEvent("recipes", (event) => {
  event.remove({ output: "oc2:transistor" });
  event.remove({ output: "oc2:circuit_board" });
  event.remove({ output: "oc2:memory_medium" });
  event.remove({ output: "oc2:memory_large" });
  //Teleport
  event.replaceInput(
    { mod: "oc2" },
    "oc2:transistor",
    "pneumaticcraft:transistor"
  );

  event.replaceInput(
    { mod: "oc2", output: "#oc2:devices/card" },
    "oc2:circuit_board",
    "pneumaticcraft:module_expansion_card"
  );

  event.replaceInput(
    { mod: "oc2", output: "#oc2:devices/robot_module" },
    "oc2:circuit_board",
    "pneumaticcraft:module_expansion_card"
  );

  event.replaceInput(
    { mod: "oc2" },
    "oc2:circuit_board",
    "pneumaticcraft:printed_circuit_board"
  );

  event.replaceInput(
    { output: "oc2:memory_small" },
    "minecraft:iron_ingot",
    "minecraft:gold_ingot"
  );
  event.shaped("oc2:memory_medium", ["   ", "MTM", " P "], {
    T: "pneumaticcraft:transistor",
    M: "oc2:memory_small",
    P: "pneumaticcraft:printed_circuit_board",
  });
  event.shaped("oc2:memory_large", ["   ", "MTM", " P "], {
    T: "pneumaticcraft:transistor",
    M: "oc2:memory_medium",
    P: "pneumaticcraft:printed_circuit_board",
  });
});
