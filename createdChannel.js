const createdChannel = await message.guild.channels.create(`🎫│${name}`, {
  type: 'text',
  parent: 'CATEGORY_ID',
  permissionOverwrites: [{
    id: reactor,
    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
  }],
});
exports.createdChannel = createdChannel;
