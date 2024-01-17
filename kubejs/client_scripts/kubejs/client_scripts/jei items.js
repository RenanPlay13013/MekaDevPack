JEIEvents.hideItems(event =>{
   const colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink'];
   const bucketPattern = /gtceu:.*_bucket/;
   colors.forEach(color => {
    //Removing Refined Storage Colored blocks From JEI
    event.hide(`refinedstorage:${color}_grid`);
    event.hide(`refinedstorage:${color}_crafting_grid`);
    event.hide(`refinedstorage:${color}_pattern_grid`); 
    event.hide(`refinedstorage:${color}_fluid_grid`); 
    event.hide(`refinedstorage:${color}_controller`); 
    event.hide(`refinedstorage:${color}_creative_controller`); 
    event.hide(`refinedstorage:${color}_network_receiver`); 
    event.hide(`refinedstorage:${color}_network_transmitter`); 
    event.hide(`refinedstorage:${color}_relay`); 
    event.hide(`refinedstorage:${color}_detector`); 
    event.hide(`refinedstorage:${color}_security_manager`); 
    event.hide(`refinedstorage:${color}_disk_manipulator`); 
    event.hide(`refinedstorage:${color}_crafter`); 
    event.hide(`refinedstorage:${color}_crafter_manager`); 
    event.hide(`refinedstorage:${color}_crafting_monitor`); 
    event.hide(`refinedstorage:${color}_wireless_transmitter`); 
});
    //Removing Flying Effect From JEI
   const flyingeffect = [
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:flying"}'), 
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:long_flying"}'),
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:extra_long_flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:extra_long_flying"}'),
   Item.of('immersiveengineering:potion_bucket', '{Potion:"apotheosis:extra_long_flying"}')
];
   flyingeffect.forEach(flyeffect =>{
   event.hide(flyeffect);
});
   //Removing Easy NPCS Itens From JEI 
   event.hide('@easy_npc');
   //Removing Operator Itens From JEI
  const OperatorsI = [
   'minecraft:command_block',
   'minecraft:chain_command_block',
   'minecraft:repeating_command_block', 
   'minecraft:jigsaw',
   'minecraft:structure_block',
   'minecraft:structure_void',
   'minecraft:barrier',
   'minecraft:debug_stick',
   'minecraft:light',
   'minecraft:command_block_minecart'
];
OperatorsI.forEach(OpI =>{
   event.hide(OpI);
});
//Hidding Rage Glove
event.hide('relics:rage_glove')
})