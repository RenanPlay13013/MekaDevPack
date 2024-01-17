ServerEvents.recipes(event=>{
    event.remove({output:'scannable:scanner'});
    event.shaped('scannable:scanner',
    [
      'A A',
      'BDB',
      'CCC'
    ],
    {
     A: 'mekaweapons:magnetizer',
     B: 'mysticalagradditions:nether_star_shard',
     C: 'stalwart_dungeons:teleporter_pearl',
     D: 'pneumaticcraft:assembly_program_drill_laser'
    })
})