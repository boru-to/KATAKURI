~ KATAKURI_MD

const _0x5c1ab3=_0x1d74;function _0x2daa(){const _0x164558=['ALWAYS_ONLINE','sendMessage','file://','extendedTextMessage','decodeJid','10408gDzBMJ','13437lxIrDB','AUTO_TYPING','admin','composing','ANTI_DELETE','AUTO_READ_STATUS','default','Failed\x20to\x20load\x20plugin:\x20','log','isGroup','error','Media\x20message','split','AUTO_READ','readMessages','690312bqvoDi','updateBlockStatus','text','endsWith','startsWith','remoteJid','stringify','key','sender','sendPresenceUpdate','\x0a\x20\x20\x20\x20\x20\x20','slice','@s.whatsapp.net','496755AWiMrn','body','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20*Deleted\x20Message:*\x20','AUTO_RECORDING','2554326YLkbWZ','participants','block','status@broadcast','notify','includes','5167806BgYTSi','unavailable','length','212','user','message','OWNER_NUMBER','push','match','cmds','from','join','then','url','public','toLowerCase','55108VNdhwY','AUTO_BLOCK','messages','1338572acPPMG','3VUifqW'];_0x2daa=function(){return _0x164558;};return _0x2daa();}(function(_0x7a6704,_0x136fd1){const _0x3e2781=_0x1d74,_0x4b7f98=_0x7a6704();while(!![]){try{const _0x1f043f=parseInt(_0x3e2781(0x21b))/0x1+parseInt(_0x3e2781(0x201))/0x2+parseInt(_0x3e2781(0x205))/0x3*(parseInt(_0x3e2781(0x204))/0x4)+parseInt(_0x3e2781(0x1e7))/0x5+parseInt(_0x3e2781(0x1eb))/0x6+parseInt(_0x3e2781(0x1f1))/0x7+-parseInt(_0x3e2781(0x20b))/0x8*(parseInt(_0x3e2781(0x20c))/0x9);if(_0x1f043f===_0x136fd1)break;else _0x4b7f98['push'](_0x4b7f98['shift']());}catch(_0x62ffad){_0x4b7f98['push'](_0x4b7f98['shift']());}}}(_0x2daa,0x5b2c6));import{serialize,decodeJid}from'../../gift/gift.js';import _0x34dc0b from'path';import _0x3820ba from'fs/promises';import _0x1ab0e0 from'../../set.cjs';import{smsg}from'../../gift/gifted.cjs';import{handleAntilink}from'./giftke.js';import{fileURLToPath}from'url';const __filename=fileURLToPath(import.meta[_0x5c1ab3(0x1fe)]),__dirname=_0x34dc0b['dirname'](__filename);export const getGroupAdmins=_0x28dea8=>{const _0x52a9d1=_0x5c1ab3;let _0x16f244=[];for(let _0xe5dc35 of _0x28dea8){(_0xe5dc35[_0x52a9d1(0x20e)]==='superadmin'||_0xe5dc35['admin']==='admin')&&_0x16f244[_0x52a9d1(0x1f8)](_0xe5dc35['id']);}return _0x16f244||[];};function _0x1d74(_0x33a386,_0x154f6d){const _0x2daa91=_0x2daa();return _0x1d74=function(_0x1d743d,_0x197185){_0x1d743d=_0x1d743d-0x1e0;let _0x198564=_0x2daa91[_0x1d743d];return _0x198564;},_0x1d74(_0x33a386,_0x154f6d);}const Handler=async(_0x705b81,_0x5e071d,_0x54c8a6)=>{const _0x1a20e0=_0x5c1ab3;try{if(_0x705b81['type']!==_0x1a20e0(0x1ef))return;const _0x18f8e5=serialize(JSON['parse'](JSON[_0x1a20e0(0x1e0)](_0x705b81[_0x1a20e0(0x203)][0x0])),_0x5e071d,_0x54c8a6);if(!_0x18f8e5[_0x1a20e0(0x1f6)])return;const _0x59f3bf=_0x18f8e5['isGroup']?await _0x5e071d['groupMetadata'](_0x18f8e5[_0x1a20e0(0x1fb)])[_0x1a20e0(0x1fd)](_0xb6d044=>_0xb6d044[_0x1a20e0(0x1ec)]):[],_0x377850=_0x18f8e5[_0x1a20e0(0x215)]?getGroupAdmins(_0x59f3bf):[],_0x234b8e=_0x5e071d[_0x1a20e0(0x1f5)]['id'][_0x1a20e0(0x218)](':')[0x0]+_0x1a20e0(0x1e6),_0x2f7203=_0x18f8e5[_0x1a20e0(0x215)]?_0x377850[_0x1a20e0(0x1f0)](_0x234b8e):![],_0x2d6d0b=_0x18f8e5[_0x1a20e0(0x215)]?_0x377850[_0x1a20e0(0x1f0)](_0x18f8e5[_0x1a20e0(0x1e2)]):![],_0x1f750b=/^[\\/!#.]/,_0x10d268=_0x91d4e7=>_0x1f750b['test'](_0x91d4e7),_0x6b2fc=_0x10d268(_0x18f8e5['body'])?_0x18f8e5['body'][_0x1a20e0(0x1f9)](_0x1f750b):null,_0x5821c1=_0x6b2fc?_0x6b2fc[0x0]:'/',_0x47ee89=_0x18f8e5[_0x1a20e0(0x1e8)][_0x1a20e0(0x21f)](_0x5821c1)?_0x18f8e5[_0x1a20e0(0x1e8)]['slice'](_0x5821c1[_0x1a20e0(0x1f3)])[_0x1a20e0(0x218)]('\x20')[0x0][_0x1a20e0(0x200)]():'',_0x1b0b26=_0x18f8e5[_0x1a20e0(0x1e8)][_0x1a20e0(0x1e5)](_0x5821c1['length']+_0x47ee89[_0x1a20e0(0x1f3)])['trim']();_0x18f8e5[_0x1a20e0(0x1e1)]&&_0x18f8e5[_0x1a20e0(0x1e1)]['remoteJid']===_0x1a20e0(0x1ee)&&_0x1ab0e0[_0x1a20e0(0x211)]&&await _0x5e071d['readMessages']([_0x18f8e5[_0x1a20e0(0x1e1)]]);if(_0x18f8e5[_0x1a20e0(0x1e1)]&&_0x18f8e5[_0x1a20e0(0x1fb)]){_0x1ab0e0[_0x1a20e0(0x20d)]&&await _0x5e071d[_0x1a20e0(0x1e3)](_0x1a20e0(0x20f),_0x18f8e5[_0x1a20e0(0x1fb)],[_0x18f8e5[_0x1a20e0(0x1e1)]]);_0x1ab0e0[_0x1a20e0(0x1ea)]&&await _0x5e071d[_0x1a20e0(0x1e3)]('recording',_0x18f8e5[_0x1a20e0(0x1fb)],[_0x18f8e5[_0x1a20e0(0x1e1)]]);_0x1ab0e0[_0x1a20e0(0x206)]?await _0x5e071d[_0x1a20e0(0x1e3)]('available',_0x18f8e5[_0x1a20e0(0x1fb)],[_0x18f8e5[_0x1a20e0(0x1e1)]]):await _0x5e071d[_0x1a20e0(0x1e3)](_0x1a20e0(0x1f2),_0x18f8e5['from'],[_0x18f8e5['key']]);_0x1ab0e0[_0x1a20e0(0x219)]&&await _0x5e071d[_0x1a20e0(0x21a)]([_0x18f8e5[_0x1a20e0(0x1e1)]]);_0x1ab0e0[_0x1a20e0(0x202)]&&_0x18f8e5[_0x1a20e0(0x1e2)]['startsWith'](_0x1a20e0(0x1f4))&&await _0x5e071d[_0x1a20e0(0x21c)](_0x18f8e5[_0x1a20e0(0x1e2)],_0x1a20e0(0x1ed));if(_0x18f8e5['messageStubType']===0x44&&_0x1ab0e0[_0x1a20e0(0x210)]){const _0x2fd6e2=_0x18f8e5[_0x1a20e0(0x1e1)]['participant']||_0x18f8e5[_0x1a20e0(0x1e1)][_0x1a20e0(0x220)],_0x33339d=_0x18f8e5[_0x1a20e0(0x1f6)]?.['conversation']||_0x18f8e5['message']?.[_0x1a20e0(0x209)]?.[_0x1a20e0(0x21d)]||_0x1a20e0(0x217),_0x217505='\x0a\x20\x20\x20\x20\x20\x20\x20\x20*GIFTED-MD\x20ANTIDELETE\x20MESSAGE*\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20*Sender:*\x20@'+_0x2fd6e2[_0x1a20e0(0x218)]('@')[0x0]+_0x1a20e0(0x1e9)+_0x33339d+_0x1a20e0(0x1e4);await _0x5e071d[_0x1a20e0(0x207)](_0x1ab0e0['OWNER_NUMBER']+_0x1a20e0(0x1e6),{'text':_0x217505});}}const _0xecdef0=await _0x5e071d[_0x1a20e0(0x20a)](_0x5e071d[_0x1a20e0(0x1f5)]['id']),_0x151975=_0x1ab0e0[_0x1a20e0(0x1f7)]+_0x1a20e0(0x1e6);let _0x13d470=![];_0x18f8e5['isGroup']?_0x13d470=_0x18f8e5['sender']===_0x151975||_0x18f8e5[_0x1a20e0(0x1e2)]===_0xecdef0:_0x13d470=_0x18f8e5[_0x1a20e0(0x1e2)]===_0x151975||_0x18f8e5[_0x1a20e0(0x1e2)]===_0xecdef0;if(!_0x5e071d[_0x1a20e0(0x1ff)]){if(!_0x13d470)return;}await handleAntilink(_0x18f8e5,_0x5e071d,_0x54c8a6,_0x2f7203,_0x2d6d0b,_0x13d470);const {isGroup:_0x1e200b,type:_0x46c7cb,sender:_0x2f7506,from:_0xf32452,body:_0x503dde}=_0x18f8e5;console['log'](_0x18f8e5);const _0x2b774c=_0x34dc0b[_0x1a20e0(0x1fc)](__dirname,'..',_0x1a20e0(0x1fa)),_0xe186db=await _0x3820ba['readdir'](_0x2b774c);for(const _0x55afa3 of _0xe186db){if(_0x55afa3[_0x1a20e0(0x21e)]('.js')){const _0x2757e7=_0x34dc0b['join'](_0x2b774c,_0x55afa3);try{const _0x324d33=await import(_0x1a20e0(0x208)+_0x2757e7),_0x96d933=_0x324d33[_0x1a20e0(0x212)];await _0x96d933(_0x18f8e5,_0x5e071d);}catch(_0x55f028){console[_0x1a20e0(0x216)](_0x1a20e0(0x213)+_0x2757e7,_0x55f028);}}}}catch(_0x4a0ad4){console[_0x1a20e0(0x214)](_0x4a0ad4);}};export default Handler;

~ KATAKURI_MD